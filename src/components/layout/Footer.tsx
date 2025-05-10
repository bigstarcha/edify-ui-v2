import React from 'react';

function Footer() {
    return (
        <footer className="absolute bottom-0 w-full bg-gray-700 text-white py-4">
            <div className="container mx-auto text-center">
                <p>
                    &copy; {new Date().getFullYear()} Edify. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}

export default React.memo(Footer);
