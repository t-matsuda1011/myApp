"use client";

import PageMessage from "@/components/page-message";
import CardContents from "@/components/card-contents";
import PasswordCheck from "@/components/password-check";

export default function Page() {
    return (
        <div className='mt-10'>
            <PageMessage text="Test"/>
            <div className='mt-10 mx-auto p-10 bg-white md:w-4/5 w-11/12 rounded-xl shadow-md'>
                <CardContents
                    bio="あいうえお"
                    name="こんにちは"
                    nickname="これはテストです"
                />
                <CardContents
                    bio="ああああ"
                    name="あああああ"
                    nickname="ああああああ"
                />
                <CardContents
                    bio="test"
                    name="this is test"
                    nickname="test yade"
                />
                <CardContents
                    bio="test"
                    name="test"
                    nickname="test yade"
                />
                <CardContents
                    bio="hello"
                    name="Hello"
                    nickname="^-^"
                />
            </div>
            <PasswordCheck />
        </div>
    );
}