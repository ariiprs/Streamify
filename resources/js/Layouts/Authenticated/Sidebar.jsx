import { Link, Head, usePage } from "@inertiajs/react";
import SubscriptionDetail from "./SubscriptionDetail";
import { UserMenu, UserOthers } from "./MenuList";
import MenuItem from "./MenuItem";


export default function Sidebar({children,auth}){
    const user = usePage().props.auth.user;

    // const activePlan = usePage().activePlan;

    return (
        <>
            <Head>
                <title>Subscription</title>
            </Head>
            <aside className="fixed z-50 w-[300px] h-full">
                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full hide-scrollbar">
                    <a href="/">
                        <img src="/images/moonton.svg" alt="" />
                    </a>
                    <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                        <div>
                            <div className="text-gray-1 text-sm mb-4">Menu</div>
                            {/* menu item di sini diambil berdasarkan ArrayObject yang ada di Menulist dan lalu diteruskan ke dalam MenuItem */}
                            {UserMenu.map((menu, index) => (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                />
                            ))}
                            {/* MenuItem ini digunakan untuk mengatur supaya bisa dimaping */}
                        </div>

                        <div>
                            <div className="text-gray-1 side-link mb-4">
                                Others
                            </div>
                            {UserOthers.map((menu, index) => (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                    method={menu.method}
                                />
                            ))}
                        </div>

                        {/* <SubscriptionDetail /> */}

                        {user.activePlan && (
                            <SubscriptionDetail
                                name={user.activePlan.name}
                                isPremium={user.activePlan.name === "Premium"}
                                remainingActiveDays={
                                    user.activePlan.remainingActiveDays
                                }
                                activeDays={user.activePlan.activeDays}
                            />
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}