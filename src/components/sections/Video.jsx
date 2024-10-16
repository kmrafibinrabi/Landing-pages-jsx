import React from 'react';

const Video = () => {
    return (
        <section>
            <div className="w-full h-full">
                <iframe className="w-full h-[800px]" src="https://www.youtube.com/embed/ALQRkFYfTGU?si=hQZJEFR6Pb6zFtCt"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </section>
    );
};

export default Video;
