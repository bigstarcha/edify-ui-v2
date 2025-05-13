'use client';

import React from 'react';
import PostVertical from '@components/homepage/PostVertical';
import _ from 'lodash';

function HomePage() {
    // I'm thinking this. <br />
    // Put a section for recommended/suggested friends <br />
    // Put a section for recent friend updates? <br />
    // Notification center? <br />
    // List of new posts
    return (
        <div>
            {_.fill(Array(10), 0).map((index) => (
                <PostVertical
                    key={index}
                    name="Sample Name"
                    location="Sample Location"
                    liked={false}
                />
            ))}
        </div>
    );
}

export default React.memo(HomePage);

// Forget about image for now. That is a later concern.
