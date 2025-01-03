import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Authenticated";
import { router } from "@inertiajs/react";

export default function SubscriptionPlan({auth, subscriptionPlan }) {

    /* ini function untuk mengambil data berdasarkan id item yang diklik */
    const selectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            })
        );
    }

    return (
        <Authenticated auth={auth}>
            {/* START: Content */}
            <div className="px-[50px]">
                <div className="py-10 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    {/* Pricing Card */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        {subscriptionPlan.map((itemSubscriptionPlan) => (
                            <SubscriptionCard
                                name={itemSubscriptionPlan.name}
                                price={itemSubscriptionPlan.price}
                                durationInMonth={itemSubscriptionPlan.active_period_in_months}
                                features= {JSON.parse(itemSubscriptionPlan.features)}
                                isPremium={itemSubscriptionPlan.name === "Premium"}
                                key={itemSubscriptionPlan.id}
                                onSelectSubscription= {() => selectSubscription(itemSubscriptionPlan.id)}
 
                            />
                        ))}

                    </div>
                    {/* Pricing Card */}
                </div>
            </div>
            {/* END: Content */}
        </Authenticated>
    );
}