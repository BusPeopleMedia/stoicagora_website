import { lazy } from "react";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
    return (
        <Container>
            <ScrollToTop />
            <article id="tos">
                <h2 className="major">Terms of Service</h2>
                <section>
                    <h3 className="major">INTRODUCTION</h3>
                    <p>
                        These Terms & Conditions govern the use of the content and services offered through Agora application
                        (“Agora App” or “App”), Agora website and Agora social media accounts (collectively “Services”).
                    </p>
                    <p>
                        The terms “Agora” and “we” refer to a company incorporated in the US:
                    </p>
                    <p>
                        <b>Bus People Media, LLC,</b>
                        <b>5900 Balcones Drive STE 100, Austin,</b>
                        <b>TX 78731, USA</b>
                    </p>
                    <p>The terms “user” or “you” refer to the user of the Services.
                        The term “users” refers to the other users of the Services.
                        ‍
                        By using or accessing our Services you accept these Terms & Conditions.
                        ‍
                        Your use of our Services is subject to Agora Privacy Policy, which is an integral part of these Terms &
                        Conditions and is available at: https://buspeoplemedia.com/#work.</p>
                    <h3>Agora APP</h3>
                    <h4>1. General rules</h4>
                    <p>
                        By using Agora App you are subject to these Terms & Conditions and to any rules or policies applied by any
                        App Store provider from whose site you download the App (“Provider”).
                        ‍
                        We license use of Agora App to you on the basis of these Terms & Conditions. We (or our affiliates and/or
                        third party licensors, where applicable) remain the owners of Agora App all times.
                    </p>
                    <h4>2. App account and Premium subscriptions</h4>
                    <p>
                        To download and use Agora App you must sign in with your Apple ID or Google ID.
                        ‍
                        Relevant rules of Apple Inc. and Google Inc. respectively located at: <a
                            href="https://www.apple.com/itunes">https://www.apple.com/itunes</a> and <a
                                href="https://play.google.com/store">https://play.google.com/store</a> apply. If you use a Provider other
                        than listed above, you are subject to the terms and conditions of that Provider. Please contact your
                        Provider in connection with any issues regarding your account.
                        ‍
                        Agora App offers a Premium subscription that grants you access to additional features. You can purchase
                        and/or subscribe to Agora Premium or other paid products. By paying the subscription fee you get access to
                        Agora Premium during the time your subscription is valid, subject to these Terms and Conditions. All
                        subscriptions with Agora Premium are paid in advance. You may at any time terminate your membership, in
                        which case your membership will still be valid for the subscription time you have already paid for. You
                        hereby consent to start using the Services immediately upon subscribing with Agora Premium or other paid
                        products. This means that you will only have 7 days to withdraw from the contract with Agora from the date
                        you receive confirmation of your subscription via email if you do not start using the service during that
                        period. Agora reserves the right to change the subscription fees from time to time.
                        ‍
                        Users purchase subscriptions for Agora App through the App Store, the Google Play store, or other Provider
                        are governed by the terms and conditions of the Provider. Please contact your Provider in connection with
                        any issues regarding payments, renewals and refunds.

                        If you have subscribed to Agora Premium through the use of App Store, Google Play Store or any other
                        Provider, using in-app purchase, you can only cancel your subscription through the use of their services.
                        Apple subscription purchases are handled by Apple Inc. Agora does not have access to your billing
                        information and cannot issue a refund. To request refund and with other issues regarding subscription please
                        contact Apple Inc. Google Play subscription purchases are handled by Google Inc. Agora does not have access
                        to your billing information and cannot issue a refund. To request refund and with other issues regarding
                        subscription please contact Google Inc.
                        ‍
                        You can at any time choose to cancel/end your account by contacting the Provider. Please note that
                        uninstalling the mobile application or closing your account will not automatically stop your Premium
                        subscription — you must actively cancel the subscription. Please note that if you have subscribed to Agora
                        through the use of App Store, Google Play Store, or any other Provider, you can only cancel your
                        subscription through the use of their services. To find out how to cancel the subscription and/or your
                        account, please follow the instructions in the App or contact your Provider for help.
                    </p>
                    <h4>3. Age</h4>
                    <p>
                        Agora App is not directed to individuals under the age of sixteen (16). To use the App, you agree that you
                        must be 16 or older. However, if law requires that you must be older in order for Agora to lawfully provide
                        the Services to you without parental consent (including using of your personal data) then you must acquire
                        this minimum age.
                    </p>
                    <h4>4. Using the App</h4>
                    <p>
                        Agora is committed to ensuring that the App is as useful and efficient as possible. For that reason, we
                        reserve the right to make changes to the App or to charge for its services, at any time and for any reason.
                        We will never charge you for the App or its services without making it very clear to you exactly what you’re
                        paying for.

                        It’s your responsibility to keep your phone and access to Agora App secure. We therefore recommend that you
                        do not jailbreak or root your phone, which is the process of removing software restrictions and limitations
                        imposed by the official operating system of your device. It could make your phone vulnerable to
                        malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the
                        Agora App won’t work properly or at all.
                        ‍
                        Certain functions of the App will require the app to have an active internet connection. The connection can
                        be Wi-Fi, or provided by your mobile network provider. Agora cannot take responsibility for the App not
                        working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data
                        allowance left.
                        ‍
                        If you’re using the App outside of an area with Wi-Fi, you should remember that your terms of the agreement
                        with your mobile network provider will still apply. As a result, you may be charged by your mobile provider
                        for the cost of data for the duration of the connection while accessing the App, or other third party
                        charges. In using the App, you’re accepting responsibility for any such charges, including roaming data
                        charges if you use the App outside of your home territory (i.e. region or country) without turning off data
                        roaming.
                        ‍

                        Although we endeavor to ensure that the App is updated and correct at all times, we do rely on third parties
                        to provide information to us so that we can make it available to you. Agora accepts no liability for any
                        loss, direct or indirect, you experience as a result of relying wholly on this functionality of the App.
                        ‍
                        At some point, we may wish to update the App. The App is currently available on iOS – the requirements for
                        systems (and for any additional systems we decide to extend the availability of the App to) may change, and
                        you’ll need to download the updates if you want to keep using the App. Agora cannot guarantee that it will
                        always update the App so that it is relevant to you and/or works with the iOS/Android version that you have
                        installed on your device.
                        ‍
                        We may also wish to stop providing the App, and may terminate use of it at any time without giving notice of
                        termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted
                        to you in these terms will end; (b) you must stop using the App, and (if needed) delete it from your device.
                        ‍
                        If you are not the bill payer for the device on which you are using the App, please be aware that we assume
                        that you have received permission from the bill payer for using the App.
                    </p>
                    <h3>MEDICAL DISCLAIMER</h3>
                    <p>
                        Agora App provides Services which serve the users to improve their well-being. Agora is not a health care or
                        medical provider, nor should Agora’s Services be considered medical advice.
                        ‍
                        Agora makes no claims, representations or guarantees that the App provides a physical or therapeutic
                        benefit.
                        ‍
                        PRACTICES CONDUCTED WITH Agora APP ARE NOT A REPLACEMENT FOR OR A FORM OF THERAPY NOR ARE THEY INTENDED TO
                        CURE, TREAT, OR DIAGNOSE MEDICAL CONDITIONS. ONLY YOUR PHYSICIAN OR OTHER HEALTH CARE PROVIDER CAN DO THAT.
                        PLEASE CONSULT WITH A LICENSED PHYSICIAN OR OTHER QUALIFIED HEALTHCARE PROVIDER BEFORE MAKING ANY DECISIONS
                        OR TAKING ANY ACTIONS THAT MAY AFFECT YOUR HEALTH.
                        ‍
                        SHOULD YOU HAVE DEPRESSION, HAVE BEEN DIAGNOSED WITH OTHER MENTAL DISORDER OR HAVE OTHER EXISTING MENTAL
                        HEALTH CONDITIONS ALWAYS SPEAK TO A LICENSED PHYSICIAN OR OTHER QUALIFIED HEALTHCARE PROVIDER BEFORE
                        STARTING Agora PRACTICES TO TALK THROUGH YOUR OPTIONS AND TO CONSULT USING Agora APP IN YOUR PARTICULAR
                        CASE.
                        ‍
                        IF YOU HAVE SERIOUS MENTAL HEALTH CONDITIONS OR ARE AT RISK OF HARMING YOURSELF OR ANOTHER PERSON, YOU
                        SHOULD SEEK URGENT MEDICAL ADVICE OR CALL THE EMERGENCY SERVICES.


                        If you access and engage with our App, you will interact with other users who will provide personal support,
                        encouragement and motivation. None of the advice provided by users or through the Services should be
                        considered medical or clinical advice and none of such information is intended as medical or clinical
                        advice. Do not disregard professional medical advice or delay seeking professional advice because of
                        information you have received through our Services or received from other users.
                    </p>
                    <h3>COPYRIGHTS</h3>
                    <p>Subject to these Terms and Conditions, Agora grants you a limited, non-exclusive, revocable license to
                        download and make personal non-commercial use of the Services, including downloading and making personal
                        non-commercial use of Agora App on user’s mobile or tablet device.
                        ‍
                        All elements contained in the Services, including software, App, App content, website and social media pages
                        content (together as “Materials”) are owned by Agora (or our affiliates and/or third party licensors, where
                        applicable) and are protected under applicable copyright, trademark and other proprietary (including, but
                        not limited to, intellectual property) rights. You agree and acknowledge that you shall not acquire any
                        ownership rights in or to these Materials.
                        ‍
                        The Materials may not be used except as provided for in these Terms and Conditions. The Materials are not
                        intended for your commercial use. You are authorized to share a limited amount of content provided by Agora
                        on your personal social media accounts (Facebook, Twitter, etc.), your blog or other online commentary,
                        analysis or review. You may not modify such a content. You agree not to publish such a content in false,
                        inaccurate, or misleading context or that is, or that encourages activity or conduct that is, unlawful,
                        harmful, threatening, abusive, hateful or otherwise objectionable.
                        ‍
                        You may not otherwise download, display, copy, reproduce, distribute, publish modify, perform, transfer,
                        create derivative works from, sell or otherwise exploit any content, or other Materials without Agora’s
                        prior consent.

                        All trademarks, logos, images, company names and brands displayed or referred to in the Services are the
                        property of Agora or respective owners. You have no license or right to use, alter or remove or copy them.

                        Any unauthorized use or violation of these Terms & Conditions immediately and automatically terminates your
                        right to use the Services and may subject you to legal liability.
                    </p>
                    <h3>USER’S RESPONSIBILITIES</h3>
                    <p>You agree not to use the Products for illegal purposes (including, without limitation, unlawful, harassing,
                        libelous, invasion of another’s privacy, abusive, threatening or obscene purposes) and you agree that you
                        will comply with all laws, rules and regulations related to your use of the Services.

                        You may not purchase, use, or access the Services for the purpose of building a competitive product or
                        service or for any other competitive purposes.

                        You may not misuse our Services by interfering with their normal operation, or attempting to access them
                        using a method other than through the interfaces and instructions that we provide.</p>
                    <h3>LIMITATION OF LIABILITY</h3>
                    <p>TO THE EXTENT PERMITTED BY APPLICABLE LAW, Agora, ITS AFFILIATES, EMPLOYEES, AGENTS, SUPPLIERS, AND
                        LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, SPECIAL, INCIDENTAL, PUNITIVE, OR EXEMPLARY
                        DAMAGES WHATSOEVER, OR LOSS OF USE, DATA, BUSINESS, REVENUES, OR PROFITS (IN EACH CASE WHETHER DIRECT OR
                        INDIRECT), ARISING OUT OF OR IN CONNECTION WITH THE SERVICES AND THESE TERMS, AND WHETHER BASED ON CONTRACT,
                        TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF Agora HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                        DAMAGES AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                        ‍
                        To the extent permitted by applicable law, the aggregated liability of each of Agora, its affiliates,
                        employees, agents, suppliers, and licensors arising out of or in connection with the Services and these
                        Terms & Conditions will not exceed the lesser of: the amounts paid by you to Agora for use of the Services
                        at issue during the 12 months prior to the event giving rise to the ability.
                        ‍
                        You use the Service at your own risk. The Service is provided “AS IS”, without any warranties, and Agora or
                        your Provider do not warrant that the Service and availability thereof will be uninterrupted or error free.
                        Agora or Provider do not assume any responsibility for errors or omissions in the information or software or
                        other documents, which are referenced by or linked to. In no event shall Agora or relevant Provider be
                        liable for any consequences of using links to third parties’ websites.
                        ‍
                        Any Materials are intended for general information purposes only. We are not liable or responsible for any
                        consequences of your having read or been told about such Materials as you assume full responsibility for
                        your decisions and actions. In particular, to the fullest extent permitted by law, we make no representation
                        or warranties about the accuracy, completeness, or suitability for any purpose of the Materials and
                        information published as part of our Services.</p>
                    <h3>APPLICABLE LAWS AND JURISDICTIONS</h3>
                    <p>
                        These Terms and Conditions shall be governed by and construed under the laws of Travis County, Texas, United
                        States of America, excluding any conflict of laws provisions, regardless of your country of origin or where
                        you access the Service.
                    </p>
                    <h3>
                        ‍CHANGES TO TERMS & CONDITION
                    </h3>
                    <p>
                        Agora reserves the right to change or update these Terms & Conditions or any other of our policies or
                        practices, at any time, and will notify users by posting updated Terms & Conditions, polices or practices on
                        this page. Any changes or updates will be effective immediately upon posting. Your continued use of the
                        Services constitutes your agreement to abide by the Terms & Conditions, polices or practices as changed.
                        Under certain circumstances we may also notify you of changes by additional means, such as email or
                        notifications in Agora App.
                    </p>
                    <h3>
                        Acceptable Use of the Services
                    </h3>
                    <p>
                        You are responsible for your use of the Services, and for any use of the Services made using your account.
                        Our goal is to create a positive, useful, and safe user experience. To promote this goal, we prohibit
                        certain kinds of conduct that may be harmful to other users or to us. When you use the Services, you must
                        comply with our Community Guidelines.
                    </p>
                    <h3>
                        Submission of Content
                    </h3>
                    <p>
                        You retain ownership of the intellectual property rights (things like copyright or trademarks) in any such
                        content that
                        you create and share on the Services. Nothing in these Terms takes away the rights you have to your own
                        content. You are
                        free to share your content with anyone else, wherever you want.
                    </p>
                    <p>
                        However, as a condition of submitting any ratings, reviews, information, data, text, photographs, audio
                        clips,
                        audiovisual works, translations, flashcards, or other materials on the Services (collectively, “Content”),
                        you hereby
                        grant to Agora a full-paid, royalty free, perpetual, irrevocable, worldwide, nonexclusive, transferable, and
                        sublicensable license to use, reproduce, copy, adapt, modify, merge, distribute, publicly display, and
                        create derivative
                        works from the Content; incorporate the Content into other works; and sublicense through multiple tiers the
                        Content. You
                        acknowledge that this license cannot be terminated by you once your Content is submitted to the Service. You
                        represent
                        that you own or have secured all legal rights necessary for the Content submitted by you to be used by you,
                        Agora, and
                        others as described and otherwise contemplated in these Terms and Conditions. You understand that other
                        users will have
                        access to the Content and that neither they or Agora have any obligation to you or anyone else to maintain
                        the
                        confidentiality of the Content.
                    </p>
                    <p>
                        You may at any time delete the individual Content you submitted through the Services. In addition, all
                        Content that you
                        posted will be deleted if you delete your account. This license will end when your content is deleted from
                        our systems.
                    </p>
                    <p>
                        As a condition of submitting any ratings, reviews, information, data, text, photographs, audio clips,
                        audiovisual works, translations, flashcards, or other materials on the Service (collectively, “Content”),
                        you hereby grant to Agora a full-paid, royalty free, perpetual, irrevocable, worldwide, nonexclusive,
                        transferable, and sublicensable license to use, reproduce, copy, adapt, modify, merge, distribute, publicly
                        display, and create derivative works from the Content; incorporate the Content into other works; and
                        sublicense through multiple tiers the Content. You acknowledge that this license cannot be terminated by you
                        once your Content is submitted to the Service. You represent that you own or have secured all legal rights
                        necessary for the Content submitted by you to be used by you, Agora, and others as described and otherwise
                        contemplated in these Terms and Conditions. You understand that other users will have access to the Content
                        and that neither they or Agora have any obligation to you or anyone else to maintain the confidentiality of
                        the Content.
                    </p>
                    <p>
                        You will not upload, display, or otherwise provide on or through the Service any Content that: (i) is
                        libelous, defamatory, abusive, threatening, harassing, hateful, offensive, or otherwise violates any law or
                        infringes upon the right of any third party (including copyright, trademark, privacy, publicity, or other
                        personal or proprietary rights); (ii) in Agora’s sole judgment, is objectionable, restricts or inhibits any
                        other person from using the Service, or may expose Agora or its users to any harm or liability of any kind;
                        or (iii) violates Agora’s Community Guidelines.
                    </p>
                    <h3>
                        Notice for Claims of Copyright Violations and Agent for Notice
                    </h3>
                    <p>
                        If you are a copyright owner and have a good faith belief that any material available through the Service
                        infringes upon your copyrights, you may submit a copyright infringement notification to Agora pursuant to
                        the Digital Millennium Copyright Act by providing us with the following information in writing:
                        <ul>
                            <li>
                                an electronic or physical signature of the copyright owner or the person authorized to act on behalf of
                                the owner of the copyright interest;
                            </li>
                            <li>
                                a description of the copyrighted work that you claim has been infringed;
                            </li>
                            <li>
                                a description of where the material that you claim is infringing is located on the Service, with enough
                                detail that we may find it on the Service;
                            </li>
                            <li>
                                your address, telephone number, and email address;
                            </li>
                            <li>
                                a statement by you that you have a good faith belief that the disputed use is not authorized by the
                                copyright owner, its agent, or the law; and
                            </li>
                            <li>
                                a statement by you, made under penalty of perjury, that the above information in your notice is accurate
                                and that you are the copyright owner or are authorized to act on the copyright owner's behalf.
                            </li>
                        </ul>
                    </p>
                    <p>Please consult your legal counsel for further details or see 17 U.S.C. §512(c)(3).
                    </p>
                    <p>
                        Agora’s Agent for Notice of claims of copyright infringement can be reached as follows:
                        <br />
                        By mail:
                        <br />

                        Registered Agents Inc.
                        <br />

                        5900 Balcones Drive, Suite 100, Austin, TX, 78731
                        <br />
                        <br />
                        By email: admin@buspeoplemedia.com
                        <br />
                        <br />
                        For clarity, only copyright infringement notices should go to our Copyright Agent. You acknowledge that if
                        you fail to comply with all of the requirements of this section your notice may not be valid.
                    </p>
                    <p>
                        If you believe the content that was removed (or to which access was disabled) is not infringing, or that you
                        have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to
                        post and use such content, you may submit a counter-notice to the address listed above containing the
                        following information:
                        <ul>
                            <li>
                                Your physical or electronic signature;
                            </li>
                            <li>
                                Identification of the content that has been removed or to which access has been disabled and the location
                                at which the content appeared before it was removed or disabled;
                            </li>
                            <li>
                                A statement that you have a good faith belief that the content was removed or disabled as a result of
                                mistake or a misidentification of the content; and
                            </li>
                            <li>
                                Your name, physical address, telephone number, and e-mail address, a statement that you consent to the
                                jurisdiction of the federal court in the judicial district in which you reside, or if you reside outside
                                of the United States, then of the federal court in Pittsburgh, Pennsylvania, and a statement that you will
                                accept service of process from the person who provided notification of the alleged infringement.
                            </li>
                        </ul>
                    </p>
                    <p>
                        After we receive your counter-notification, we will forward it to the party who submitted the original claim
                        of copyright infringement. Please note that when we forward the counter-notification, it includes your
                        personal information. By submitting a counter-notification, you consent to having your information revealed
                        in this way. We will not forward the counter-notification to any party other than the original claimant.
                    </p>
                    <p>
                        After we send out the counter-notification, the claimant must then notify us within 10 days that he or she
                        has filed an action seeking a court order to restrain you from engaging in infringing activity relating to
                        the content that was removed or disabled. If we receive such notification, we will be unable to restore the
                        material. If we do not receive such notification, we may reinstate the material
                    </p>
                </section>
            </article>
        </Container >
    );
};

export default Home;
