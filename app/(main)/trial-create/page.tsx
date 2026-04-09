"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function TrialCreatePage() {
    const router = useRouter();

    useEffect(() => {
        const createTrial = async () => {
            const token = Cookies.get("token");

       
            if (!token) {
                router.replace("/login");
                return;
            }

            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_BASE}/trial/create`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (res.status === 409 || res.status === 400) {
                    router.replace("/dashboard"); // or pricing if you want
                    return;
                }

                if (!res.ok) {
                    throw new Error("Failed to create trial");
                }

                const data = await res.json();

               
                if (data.redirectUrl) {
                    router.replace(data.redirectUrl);
                } else {
                    router.replace("/pricing");
                }
            } catch (error) {
                console.error("Trial error:", error);
                router.replace("/pricing");
            }
        };

        createTrial();
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-600 text-lg">
                Setting up your trial, please wait...
            </p>
        </div>
    );
}
