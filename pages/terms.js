import React from 'react';
import {useRouter} from "next/router";
import {Layer} from "../component/Layer/Layer";
import styles from "../styles/BuyInstagramLikes.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import styles1 from "../styles/Home.module.sass";
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import TextComponent from "../component/TextComponent";
import privacyStyles from "../styles/PrivacyPolicy.module.sass";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Head from "next/head";
const Terms = () => {
    const router = useRouter()
    return (
        <Layer firstPage={false}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>Tagiamtop | Terms of Service</title>
                <meta name="description" content="Please read Terms of Service of our platform and use TagIamTop safely."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Terms of Service - Tag I am Top"/>
                <meta property="title" content="Terms of Service - Tag I am Top"/>
                <meta property="og:description" content="Please read Terms of Service of our platform and use TagIamTop safely."/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:site_name" content="Tagiamtop"/>
                <link rel="canonical" href="https://likes.io/terms"/>
            </Head>
            <div className={styles.header_banner}>
                <p className={styles.header_title}>Terms of Service</p>
                <p className={styles.header_text}>Last Updated : October 23, 2020</p>

                <img className={styles.header_arrow} src="/arrow-detail.svg" alt=""/>
            </div>

            <PageTitle title={'Terms of Service'}/>

            <div className={privacyStyles.privacy_container}>
            <div className={privacyStyles.terms_block}>
                <p className={styles1.info_text}>
                    By signing up and gaining access to our services, you agree with the Terms and Conditions listed
                    below.

                    First of all, we would like to thank you for choosing our services. The products you purchase on our
                    website are created by STORM FZE, under the brand. The company is located at Fujairah POX. 4422,
                    United Arab Emirates. By signing up to our website, you agree to comply with our Terms and
                    Conditions and that you will be responsible for the compliance with any local laws that are in
                    effect in your region. You cannot continue accessing and using this website if you fail to agree
                    to any of the terms and conditions listed below. Every asset on the website is protected by
                    copyright and trademark law.
                </p>

            </div>
            <TextComponent title="Third-party Affiliation"
                           text={<p className={styles1.info_text} style={{lineHeight: 3}}>
                               <li>Likes.io does not have any professional connection, through sponsorship or
                                   affiliation, to Instagram, Facebook, and any other Instagram third-party partners.
                               </li>
                               <li> The services do not aim to harm the INSTAGRAM brand in any way.</li>

                               <li>The Likes.io operation is independent and separate from Instagram.</li>
                               <li>Likes.io does not take advantage of Instagram’s success and reputation.</li>
                               <li> There is no similarity between and Instagram trademarks. Both of the domain names,
                                   logos, and brands have different ownerships.
                               </li>
                           </p>}/>


            <TextComponent title="In addition to this:" text={
                <p className={styles1.info_text} style={{lineHeight: 3}}>
                    <li>You are responsible for complying with Instagram’s Terms and Conditions. You purchase the
                        services
                        at your own risk.
                    </li>
                    <li>We absolve from the responsibility if your account gets banned or suspended whilst using our
                        services. You are the only one accountable for your actions.
                    </li>
                    <li>To enjoy our services, you will need to provide your Instagram login information. Your username
                        and
                        password are not stored, traded, used in a bad faith, or shared with third-party companies.
                    </li>
                    <li>Be aware that using our system for the management of your Instagram account, might be the cause
                        of
                        losing your account as there is no official agreement between Instagram.
                    </li>
                    <li>Be aware that using our system for the management of your Instagram account, might be the cause
                        of
                        losing your account as there is no official agreement between Instagram.
                    </li>

                </p>
            }/>
            <TextComponent title="Subscription Conditions" text={
                <p className={styles1.info_text} style={{lineHeight: 3}}>
                    <li>It is advisable to use the free 3-day trial period of Likes.io, before purchasing any of our
                        plans and services.
                    </li>
                    <li>Upon the confirmation of the purchase, you state that you are fully aware of the purchased
                        services and that you will not open a fraudulent dispute via your preferred payment systems,
                        such as PayPal.
                    </li>
                    <li>To complete the payment, you need to provide us with a valid credit or debit card.</li>
                    <li>The amount for each plan is billed monthly in advance. The date is determined by the initial
                        subscription date, and the amount is non-refundable.
                    </li>
                    <li>Your subscription will not be renewed at the end of the period. When the paid period has come to
                        an end, your subscription will automatically cease to be in effect.
                    </li>


                </p>
            }/>
            <TextComponent title="Website Observation" text={
                <p className={styles1.info_text} style={{lineHeight: 3}}>
                    <ol>
                        <li>Terms & Conditions: [Terms-of-service applicable to the customers using this website has to
                            be
                            included under this field]
                        </li>
                        <li>Privacy Policy: Inclusion is mandatory and should have the below-mentioned points.
                            - “All credit/debit cards details and personally identifiable information will NOT be
                            stored, sold,
                            shared, rented or leased to any third parties”.
                            - “The Website Policies and Terms & Conditions may be changed or updated occasionally to
                            meet the
                            requirements and standards. Therefore the Customers’ are encouraged to frequently visit
                            these
                            sections in order to be updated about the changes on the website. Modifications will be
                            effective on
                            the day they are posted”.
                        </li>
                        <li>Items/Products/Services Pricing: Inclusion is mandatory.
                            [Products/Services Pricing and complete description of the goods or services offered need to
                            be
                            available and accessible while the website is being reviewed by the Acquiring RISK & Fraud
                            team.].
                        </li>
                        <li>Method of Payment, Card Types accepted and Currency: Inclusion is mandatory and should have
                            the
                            below mentioned point.
                            - “We accept payments online using Visa and MasterCard credit/debit card in AED (or any
                            other agreed
                            currency)”. The logo of the accepted cards are to be mentioned on their Homepage and on
                            their
                            Payment check out page.
                        </li>
                        <li>Delivery & Shipping Policy: Inclusion is mandatory and should have the below mentioned point
                            -
                            Recommended statement is “(Website) will NOT deal or provide any services or products to any
                            of OFAC
                            (Office of Foreign Assets Control) sanctions countries in accordance with the law of UAE”.
                        </li>
                        <li>Refund/Return Policy: To be included if refunds are offered to the customer. If not it has
                            to be
                            clearly stated on their website that the refunds will not be provided.
                            - Recommended statement is “Refunds will be done only through the Original Mode of Payment”.
                        </li>
                        <li>Address & Contact Details: Inclusion is mandatory.</li>
                        <li>Country of merchant domicile: To be mentioned as UAE.</li>
                        <li>Governing Law and Jurisdiction: Inclusion is mandatory and should have any one of the below
                            mentioned points.
                            - “Any dispute or claim arising out of or in connection with this website shall be governed
                            and
                            construed in accordance with the laws of UAE”.
                        </li>
                    </ol>
                </p>


            }/>

            <TextComponent title="Refund Policy" text={
                <p className={styles1.info_text} style={{lineHeight: 3}}>
                    You are not eligible to ask for a refund when the order of our digital products is confirmed. Once
                    our products are sent and delivered, you cannot return them and get a refund. If you encounter any
                    issues in receiving or downloading any of our digital products, please refer to our customer
                    support. Any inquiries about our Refund Policy should be sent via email

                </p>
            }/>
            </div>
        </Layer>
    );
};

export default Terms;
