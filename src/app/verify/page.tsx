import Link from "next/link";

const Signup: React.FC = () => {
    return (
        <div className="container mx-auto max-w-xl text-center flex flex-col  items-center space-y-14">
            <p className="text-5xl font-bold">Please Verify Your Email</p>

            <div>
                <p>You&apos;re almost there! We sent an email to</p>
                <p className="text-center font-bold">johndoe@gmail.com</p>
            </div>

            <p>Just click on the link in the email to complete your signup. If you don&apos;t see it, you may need to <span className="font-bold">check your spam</span> folder</p>

            <div className="space-y-4">
                <p>Still can&apos;t find the email? No problem!</p>

                <div>
                    <Link href={"/signup"} className="bg-[#2c2c2c] text-white px-8 py-3 rounded-md font-bold">
                        Resend verification email
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;