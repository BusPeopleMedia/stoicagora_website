import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
    return (
        <Container>
            <ScrollToTop />
            <article id="intro">
                <h2 className="major">Community Guidelines</h2>
                <span className="image main"><img src="images/pic01.jpg" alt="" /></span>
                <h3>Agora is a global community of stoicism practitioners.</h3>
                <p>
                    Our guidelines are meant to build a mutual understanding of what being a part of this community is all about.
                    We will take action if any of these guidelines are not upheld, so please read carefully.
                </p>
                <h4>Always be Respectful</h4>
                <p>
                    Be respectful of others and where they’re coming from.

                </p>
                <h4>Think before you share</h4>
                <p>
                    We care about your safety. Please beware of swapping or posting any private information that could be misused.
                    That includes your phone number, age, address, what time you’ll be at home, school name, email, or other
                    personal information that could put your privacy at risk. Simply put: don’t over-share. Sharing and
                    encouraging others to share personal data might get your post, and possibly your account, removed.
                </p>
                <h3>Please don’t use Agora to…</h3>
                <h4>
                    Attack a person or group of people with words and actions
                </h4>
                <p>

                    <b> Agora</b> is a safe place for stoic practitioners of all backgrounds. Harassment and hurtful content will
                    not be tolerated. Using symbols, names and text that promote hate—as well as harassing, stalking,
                    impersonating, and making sexual remarks towards someone—are considered abuse. The same goes for nudity and
                    disturbing profile pictures and usernames. As stated in the terms, Agora reserves the right to replace images
                    or remove these accounts at its sole discretion. Rule of thumb: if you are making someone feel attacked or
                    hurt, then you shouldn’t be doing it. We take these reports seriously and may delete your account without
                    previous notice if such activity is verified by our team.
                </p>

                <h4>Write inflammatory comments </h4>
                <p>
                    Hateful, obscene and off-topic comments don’t contribute to learning. Cursing doesn’t either (let people
                    discover those words in the wild). Leave them out of the language discussions.
                </p>
                <h4>To Summarize</h4>
                <p>
                    We do not tolerate content that is:
                    <ul>
                        <li>Illegal</li>
                        <li>Pornographic</li>
                        <li>Excessively profane or violent</li>
                        <li>Spam</li>
                        <li>Threatening, harassing, or bullying</li>
                        <li>Associated with racism or intolerance</li>
                        <li>Impersonating someone in a misleading or deceptive manner</li>
                        <li>Personal confidential information</li>
                    </ul>
                </p>


                <p>
                    We will remove any content that violates the spirit of these guidelines and you will risk losing partial or
                    full access to Agora without warning.
                </p>

            </article>
        </Container >
    );
};

export default Home;
