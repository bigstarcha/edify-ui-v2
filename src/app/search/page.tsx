import SearchPage from '@components/search/SearchPage';

export default function Search() {
    // Not really sure if a layout is needed, but we shall see.
    return (
        <div className="h-[calc(100vh-56px)] w-full">
            <SearchPage />
        </div>
    );
}
