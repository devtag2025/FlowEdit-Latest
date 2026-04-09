"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { useGetMySubscriptionQuery } from "../payment/subscription";

export default function AppInitializer() {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.auth.token);

    const { data } = useGetMySubscriptionQuery(undefined, {
        skip: !token,
    });

    useEffect(() => {
        if (data) {
            dispatch(setCredentials({ subscription: data }));
        }
    }, [data, dispatch]);

    return null;
}
