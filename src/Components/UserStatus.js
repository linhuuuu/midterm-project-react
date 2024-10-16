import React, { useState } from 'react';

const UserStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let message;
    if (isLoggedIn) {
        message = <h1>Welcome, User!</h1>;
    } else {
        message = <h1>Please sign in</h1>;
    }

    return (
        <div>
            {message}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default UserStatus;