import React from 'react';
import { Link } from "react-router-dom";
import Footer from './DevConnect/client/src/pages/Footer';

const PrivacyTerms = () => {
  return (
    <div className="privacyTerms overflow-x-hidden">
        <div className="bg-slate-700 w-screen h-fit px-6 md:px-10 pb-20 pt-20 text-white">
            <div className="text-center hover:text-yellow-400 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-relaxed font-serif pb-12">
                Privacy Policy & Terms of Use
            </div>

            {/* Privacy & Terms Content Section */}
            <div className="bg-slate-800 p-10 mr-4 md:p-10 rounded-2xl shadow-lg font-light leading-relaxed whitespace-pre-wrap space-y-8">
                <div>
                    <h2 className="font-bold text-xl lg:text-2xl mb-2">1. Overview</h2>
                    <p className='text-lg md:text-base'>
                        DevConnect is a space where developers connect, collaborate, and grow together. You can:
                        <br />– Share achievements, skills, and experiences.
                        <br />– Post about your projects and learning.
                        <br />– Invite others to join open-source or hackathon teams.
                        <br />– Follow and message developers.
                        <br />– Build a profile that reflects your tech journey.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-xl lg:text-2xl mb-2">2. Privacy Policy</h2>

                    <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">2.1 Information We Collect</h3>
                    <p className='text-lg md:text-base'>
                        – Name, email, username, optional bio when signing up.
                        <br />– Posts, skills, project invites, followers/following.
                        <br />– Messages (private and encrypted).
                        <br />– Profile visits, interactions, and activities.
                    </p>

                    <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">2.2 How We Use It</h3>
                    <p className='text-lg md:text-base'>
                        – Power core features like posting and messaging.
                        <br />– Help you build your network.
                        <br />– Suggest relevant content and developers.
                    </p>

                    <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">2.3 Protection & Sharing</h3>
                    <p className='text-lg md:text-base'>
                        – We don’t sell your data.
                        <br />– Visibility settings let you control what’s shared.
                        <br />– Everything’s encrypted and securely stored.
                    </p>

                    <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">2.4 Your Control</h3>
                    <p className='text-lg md:text-base'>
                        – Edit or delete your info anytime.
                        <br />– Deleting your account removes all data and content.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-xl lg:text-2xl mb-2">3. Terms of Use</h2>

                    <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">3.1 Eligibility</h3>
                    <p className='text-lg md:text-base'>
                        – 13+ years old.
                        <br />– Use it respectfully and professionally.
                    </p>

                    <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">3.2 Responsibilities</h3>
                    <p className='text-lg md:text-base'>
                        – No harmful, spammy, or misleading content.
                        <br />– Respect everyone’s ideas and code.
                        <br />– Protect your login credentials.
                    </p>

                    <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">3.3 Content Rights</h3>
                    <p className='text-lg md:text-base'>
                        – You own your posts and messages.
                        <br />– We display them only within DevConnect.
                    </p>

                    <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">3.4 Collaboration Etiquette</h3>
                    <p className='text-lg md:text-base'>
                        – Project invites are public to encourage contribution.
                        <br />– Messaging must be respectful — misuse can lead to bans.
                    </p>

                    <h3 className="font-bold text-lg lg:text-xl mt-4 mb-1">3.5 Account Termination</h3>
                    <p className='text-lg md:text-base'>
                        – Accounts violating these terms may be removed.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-xl lg:text-2xl mb-2">4. Community Guidelines</h2>
                    <p className='text-lg md:text-base'>
                        – Be helpful, kind, and professional.
                        <br />– Share your growth and uplift others.
                        <br />– Report anything inappropriate — we keep DevConnect safe together.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-xl lg:text-2xl mb-2">5. Policy Updates</h2>
                    <p className='text-lg md:text-base'>
                        – We may revise this to match new features or rules.
                        <br />– We'll always notify you about major updates.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-xl lg:text-2xl mb-2">6. Contact</h2>
                    <p className='text-lg md:text-base'>
                        Questions or feedback? Email us at: <a href="mailto:support@devconnect.io" className="underline text-yellow-400">support@devconnect.io</a>
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>

  );
}

export default PrivacyTerms;
