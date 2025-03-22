import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Citation, Container, Grid, Testimonial, Text } from "./styles";

const TestimonialCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 6000,
        autoplaySpeed: 500,
        cssEase: "linear",
        pauseOnHover: true,
        rows: 2,
        centerPadding: "60px",
    };
    const testimonials = [
        {
            review: `As someone who had no clue what stoicism meant, and as an atheist and recovering addict,
            I finally found a way to help gain inner peace and move with integrity.`,
            user: "ANH"
        },
        {
            review: "everything about this app is perfect. the curation of quotes, prompts, meditations, community discussions. very thoughtfully built.",
            user: "Renassense"
        },
        {
            review: "I have been a practicing stoic for a number of years and this is the first app that has gotten me to practice journaling on a regular basis.",
            user: "Dubdub2k"
        },
        {
            review: "I use this app everyday to take a few minutes of time to consider a Stoic ideal and respond in kind. I like seeing other people's takes on that ideal, it helps to know we are all on the same shared path.",
            user: "SteveDoom"
        },
        {
            review: "This app makes it easier for me to practice stoicism. I especially like the Meditations page. It’s great to see how other people are trying to incorporate stoicism into their lives.",
            user: "Audre287"
        },
        {
            review: "This is a nice morning meditation prompt. Reading other people’s thoughts on it offers new perspectives as well.",
            user: "one9876"
        },
    ]
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '1rem ' }}>
                {[1, 2, 3, 4, 5].map((star) => {
                    return (
                        <span
                            style={{
                                color: 'gold',
                                fontSize: `35px`,
                            }}
                        >
                            {' '}
                            ★{' '}
                        </span>
                    )
                })}
            </div>
            <Grid>
                {
                    testimonials.map((t, i) => (
                        <Testimonial
                            className={i !== 0 ? "hide-on-mobile" : ""}
                        >
                            <Text>"{t.review}"</Text>
                            <Citation>@{t.user}</Citation>
                        </Testimonial>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default TestimonialCarousel