import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
    return (
        <Container>
            <ScrollToTop />
            <article id="about">
                <h2 className="major">About</h2>
                <span className="image main"><img src="images/pic03.jpg" alt="" /></span>
                <p>
                    Bus People Media, LLC is a small indie app development company run by (and consisting entirely of) two nerds
                    who became friends in grad school. Our mission is to improve the lives of our users, and we are entirely
                    funded by your support (and our free time). Our first app, Agora, aims to bring a little more
                    mindfulness to the lives of our users with a simple, minimalist experience that supports daily engagement with
                    stoic philosophy. We are grateful for your support and your feedback!
                </p>
                <p>
                    If you want to reach us, please feel free to email us at admin@buspeoplemedia.com.
                </p>
                <p>
                    Thank you!
                </p>
            </article>
        </Container >
    );
};

export default Home;
