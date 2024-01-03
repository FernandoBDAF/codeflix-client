import Image from "next/image";
import React from "react";

export const UserProfile = () => (
    <div className="flex items-center space-x-4">
        <p className="hidden cursor-not-allowed lg:inline">Kids</p>
        <Image src="/ogre2.png" alt="profile" width={48} height={48} className="cursor-pointer rounded" />
    </div>
);
 