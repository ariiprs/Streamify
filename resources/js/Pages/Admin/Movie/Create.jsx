import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Authenticated";
import { Link, Head, useForm, usePage } from "@inertiajs/react";


export default function Create() {
    const user = usePage().props.auth.user;

    const { setData, post, processing, errors, reset } = useForm({
            name: '',
            category: '',
            video_url: '',
            thumbnail: '',
            rating: '',
            is_featured: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.type === "file"
            ? e.target.files[0]
            : e.target.value
        );
    };

    return (
        <Authenticated auth={user}>
            <Head title="Admin Create" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Movie Name" />
                    <TextInput
                        type="text"
                        name="name"
                        placeholder="Enter The Movie Name"
                        variant="primary-outline"
                        // value={data.name}
                        // isFocused={true}
                        onChange={onHandleChange}
                    />
                    <InputError message={errors.name} className="mt-4" />
                </div>
                <div>
                    <InputLabel
                        forInput="category"
                        value="Category Name"
                        className="mt-4"
                    />
                    <TextInput
                        type="text"
                        name="category"
                        placeholder="Enter The Category Name"
                        variant="primary-outline"
                        // value={data.category}
                        // isFocused={true}
                        onChange={onHandleChange}
                    />
                    <InputError message={errors.category} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        forInput="video_url"
                        value="Video Url Name"
                        className="mt-4"
                    />
                    <TextInput
                        type="url"
                        name="video_url"
                        placeholder="Enter The Video URL"
                        variant="primary-outline"
                        // value={data.video_url}
                        // isFocused={true}
                        onChange={onHandleChange}
                    />
                    <InputError message={errors.video_url} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        forInput="thumbnail"
                        value="Thumbnail"
                        className="mt-4"
                    />
                    <TextInput
                        type="file"
                        name="thumbnail"
                        placeholder="Insert The Thumbnail Of The Movie"
                        variant="primary-outline"
                        // value={data.thumbnail}
                        // isFocused={true}
                        onChange={onHandleChange}
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        forInput="rating"
                        value="Rating"
                        className="mt-4"
                    />
                    <TextInput
                        type="number"
                        name="rating"
                        placeholder="Insert The Rating Of The Movie"
                        variant="primary-outline"
                        // value={data.rating}
                        // isFocused={true}
                        onChange={onHandleChange}
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>
                <div className="flex flex-row items-center mt-4">
                    <InputLabel
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-4"
                    />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <PrimaryButton
                    type="submit"
                    className="my-4"
                    processing={processing}
                >
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
