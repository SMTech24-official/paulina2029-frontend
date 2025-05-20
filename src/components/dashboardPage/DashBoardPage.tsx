"use client"

import React from 'react'
import DashboardHeader from '@/components/shared/dashboardHeader/DashboardHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TestimonialsCard } from '@/components/testimonialsCard/TestimonialsCard'
import DashBoardStates from '@/components/dashboard/DashBoardStates'
import Loader from '../loader/Loader'
import { useGetAllFeedbacksQuery, useGetPublishedFeedbackQuery } from '../../redux/api/feedbacksApi'
import { useGetAllSubscriberQuery } from '../../redux/api/subscriberApi'
import { id, TestimonialProps } from '@/interface/globalType'





export default function DashboardPage() {
    const { data: PublishedTestimonials, isLoading } = useGetPublishedFeedbackQuery("published");
    const { data: initialSubscribers, isLoading: isLoading2 } = useGetAllSubscriberQuery(undefined);
    const { data: testimonials, isLoading: isLoading3 } = useGetAllFeedbacksQuery(undefined);
    if (isLoading && isLoading2 && isLoading3) {
        return <Loader />
    }

    return (
        <div className="dashboard-containers">
            <DashboardHeader
                title="Reach out to us for personalized assistance"
                toolText="Dashboard"
                subtitle="Email, call, or complete the form to learn how we can solve your needs."
            />

            <div className="mt-10">
                <DashBoardStates TotalFeedBacks={testimonials?.data?.length} subscriber={initialSubscribers?.data?.length} publishedFeedbacks={PublishedTestimonials?.data?.length} />
            </div>

            <Card className='mt-10'>
                <CardHeader>
                    <CardTitle>Active Feedbacks</CardTitle>
                </CardHeader>
                <CardContent className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    {
                        isLoading ? <Loader /> :
                            PublishedTestimonials?.data?.map((data: TestimonialProps & id, idx: number) => <TestimonialsCard isAdmin={true} idx={idx} data={data} key={idx} />)
                    }
                </CardContent>
            </Card>
        </div>
    )
}