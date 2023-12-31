import { Endpoint } from 'endpoint-client';

// POST /admin/users/:userId/plan
export type PostAdminUserPlanUpdateParameter = {
    userId: number;
    plan: 'FREE' | 'PRO';
    months: string;
    price: number;
    priceKind: string;
    paymentKind: string;
    memo?: string;
};
export type PostAdminUserPlanUpdateResponse = {};

export const postAdminUserPlanUpdate: Endpoint<
    PostAdminUserPlanUpdateParameter,
    PostAdminUserPlanUpdateResponse
> = {
    method: 'POST',
    path: (e) => `/admin/users/${e.userId}/plan`,
    bodyParams: ['memo', 'months', 'paymentKind', 'plan', 'price', 'priceKind'],
    pathParams: ['userId'],
    queryParams: [],
};
