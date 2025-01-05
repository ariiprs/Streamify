import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Authenticated"
import { Link, usePage } from "@inertiajs/react";


export default function Index({ auth, flashMessage , movies }) {
    const user = usePage().props.auth.user;

    return (
        <Authenticated auth={user}>
            <Link href={route("admin.dashboard.movie.create")}>
                <div className="w-40 mb-8">
                    <PrimaryButton type="button" className="text-sm px-4 py-2">
                        {" "}
                        Insert new movie{" "}
                    </PrimaryButton>
                </div>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img
                                    src={`/storage/${movie.thumbnail}`}
                                    className="w-14 rounded-md"
                                />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td className="text-sm px-10 py-2">
                                <Link href={route("admin.dashboard.movie.edit", movie.id)}>
                                    <PrimaryButton
                                        type="button"
                                        variant="warning"
                                    >
                                        Edit
                                    </PrimaryButton>
                                </Link>
                            </td>
                            <td className="text-sm px-10 py-2">
                                <PrimaryButton type="button" variant="danger">
                                    Delete
                                </PrimaryButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}