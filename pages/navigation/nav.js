import Link from 'next/link';

const NewNav = () => {
    return (
        <header>
            <div class="flex justify-center m-auto w-96">
                <nav class="flex justify-around mt-10 w-full">
                    <a href="/" class="hover:text-darkGrayishBlue">Home</a>
                    <a href="/members/band-members" class="hover:text-darkGrayishBlue">Members</a>
                    <a href="/gallery/gallery" class="hover:text-darkGrayishBlue">Gallery</a>
                </nav>
            </div>
        </header>
    )
}

export default NewNav;