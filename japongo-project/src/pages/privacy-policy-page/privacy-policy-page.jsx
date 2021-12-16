import { Grid } from "@mui/material";
import { useContext, Fragment } from "react";
import { LangContext } from '../../context/lang-context/lang-context.js';

export default function PrivacyPolicyPage() {
    const [lang] = useContext(LangContext);

    return (
        <Fragment>
            {
                lang === 'en' ? (
                    <Grid item container xs={9} justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
                        <h1>Privacy Policy for JaponGo</h1>

                        <p>At JaponGo, accessible from www.japongo.go, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by JaponGo and how we use it.</p>

                        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in JaponGo. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the .</p>

                        <h2>Consent</h2>

                        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                        <h2>Information we collect</h2>

                        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                        <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                        <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

                        <h2>How we use your information</h2>

                        <p>We use the information we collect in various ways, including to:</p>

                        <ul>
                            <li>Provide, operate, and maintain our website</li>
                            <li>Improve, personalize, and expand our website</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                            <li>Send you emails</li>
                            <li>Find and prevent fraud</li>
                        </ul>

                        <h2>Log Files</h2>

                        <p>JaponGo follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

                        <h2>Cookies and Web Beacons</h2>

                        <p>Like any other website, JaponGo uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                        



                        <h2>Advertising Partners Privacy Policies</h2>

                        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of JaponGo.</p>

                        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on JaponGo, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                        <p>Note that JaponGo has no access to or control over these cookies that are used by third-party advertisers.</p>

                        <h2>Third Party Privacy Policies</h2>

                        <p>JaponGo's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

                        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

                        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                        <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
                        <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
                        <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
                        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

                        <h2>GDPR Data Protection Rights</h2>

                        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                        <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
                        <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
                        <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
                        <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
                        <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
                        <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
                        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

                        <h2>Children's Information</h2>

                        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                        <p>JaponGo does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                    </Grid>
                ):
                (
                    <Grid item container xs={9} justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
                    <h1>JaponGoのプライバシーポリシー</h1>

                    <p>www.japongo.goからアクセスできるJaponGoでは、私たちの主な優先事項の1つは、訪問者のプライバシーです。このプライバシーポリシー文書には、JaponGoによって収集および記録される情報の種類と、その使用方法が含まれています。</p>

                    <p>ご不明な点がある場合や、プライバシーポリシーについてさらに詳しい情報が必要な場合は、お気軽にお問い合わせください。</p>

                    <p>このプライバシーポリシーは、当社のオンラインアクティビティにのみ適用され、JaponGoで共有および/または収集した情報に関して、当社のWebサイトへの訪問者に有効です。このポリシーは、オフラインまたはこのWebサイト以外のチャネルを介して収集された情報には適用されません。私たちのプライバシーポリシーは、の助けを借りて作成されました。</p>

                    <h2>同意</h2>

                    <p>当社のウェブサイトを使用することにより、お客様は当社のプライバシーポリシーに同意し、その条件に同意するものとします。</p>

                    <h2>収集する情報</h2>

                    <p>ご提供をお願いする個人情報とその理由は、ご提供をお願いする時点で明確にさせていただきます。</p>
                    <p>直接お問い合わせいただくと、お名前、メールアドレス、電話番号、送信するメッセージや添付ファイルの内容、その他の情報など、お客様に関する追加情報を受け取る場合があります。</p>
                    <p>アカウントに登録する際に、氏名、会社名、住所、メールアドレス、電話番号などの連絡先情報をお伺いする場合があります。</p>

                    <h2>お客様の情報の使用方法</h2>

                    <p>収集した情報は、次のようなさまざまな方法で使用されます。</p>

                    <ul>
                        <li>当社のウェブサイトを提供、運営、維持する</li>
                        <li>当社のウェブサイトを改善、パーソナライズ、および拡張する</li>
                        <li>あなたが私たちのウェブサイトをどのように使用するかを理解し、分析します</li>
                        <li>新しい製品、サービス、機能、および機能を開発する</li>
                        <li>直接または当社のパートナーの1つを介して、カスタマーサービスを含め、お客様と連絡を取り、Webサイトに関連する最新情報やその他の情報を提供し、マーケティングおよびプロモーションの目的でお客様に連絡します。</li>
                        <li>メールを送る</li>
                        <li>詐欺を見つけて防止する</li>
                    </ul>

                    <h2>ログファイル</h2>

                    <p>JaponGoは、ログファイルを使用する標準的な手順に従います。これらのファイルは、訪問者がWebサイトにアクセスしたときにログに記録します。すべてのホスティング会社がこれを行い、ホスティングサービスの分析の一部を行っています。ログファイルによって収集される情報には、インターネットプロトコル（IP）アドレス、ブラウザーの種類、インターネットサービスプロバイダー（ISP）、日付とタイムスタンプ、参照/終了ページ、および場合によってはクリック数が含まれます。これらは、個人を特定できる情報にはリンクされていません。この情報の目的は、傾向の分析、サイトの管理、Webサイトでのユーザーの動きの追跡、および人口統計情報の収集です</p>

                    <h2>クッキーとウェブビーコン</h2>

                    <p>他のウェブサイトと同様に、JaponGoは「Cookie」を使用します。これらのCookieは、訪問者の好みや、訪問者がアクセスまたは訪問したWebサイト上のページなどの情報を保存するために使用されます。この情報は、訪問者のブラウザの種類やその他の情報に基づいてWebページのコンテンツをカスタマイズすることにより、ユーザーエクスペリエンスを最適化するために使用されます。</p>




                    <h2>広告パートナーのプライバシーポリシー</h2>

                    <p>このリストを参照して、JaponGoの各広告パートナーのプライバシーポリシーを見つけることができます。</p>

                    <p>サードパーティの広告サーバーまたは広告ネットワークは、ユーザーのブラウザに直接送信されるJaponGoに表示されるそれぞれの広告およびリンクで使用されるCookie、JavaScript、またはWebビーコンなどのテクノロジーを使用します。これが発生すると、彼らは自動的にあなたのIPアドレスを受け取ります。これらのテクノロジーは、広告キャンペーンの効果を測定したり、アクセスしたWebサイトに表示される広告コンテンツをパーソナライズしたりするために使用されます。</p>

                    <p>JaponGoは、サードパーティの広告主が使用するこれらのCookieにアクセスしたり制御したりすることはできません</p>

                    <h2>サードパーティのプライバシーポリシー</h2>

                    <p>JaponGoのプライバシーポリシーは、他の広告主やWebサイトには適用されません。したがって、詳細については、これらのサードパーティの広告サーバーのそれぞれのプライバシーポリシーを参照することをお勧めします。特定のオプションをオプトアウトする方法についての実践と指示が含まれる場合があります。 </p>

                    <p>個々のブラウザオプションからCookieを無効にすることを選択できます。特定のWebブラウザでのCookie管理の詳細については、ブラウザのそれぞれのWebサイトを参照してください。</p>

                    <h2>CCPAプライバシー権（私の個人情報を販売しないでください）</h2>

                    <p>CCPAの下では、他の権利の中でも、カリフォルニア州の消費者は次の権利を有します。</p>
                    <p>消費者の個人データを収集する企業に、企業が消費者に関して収集した個人データのカテゴリと特定の部分を開示するように要求します。</p>
                    <p>企業が収集した消費者に関する個人データを削除するように企業に依頼します。</p>
                    <p>消費者の個人データを販売するのではなく、消費者の個人データを販売する企業に依頼します。</p>
                    <p>ご要望がございましたら、1ヶ月以内に対応させていただきます。これらの権利の行使をご希望の場合は、お問い合わせください。</p>

                    <h2>GDPRデータ保護の権利</h2>

                    <p>お客様がすべてのデータ保護権を十分に認識していることを確認したいと思います。すべてのユーザーには、次の権利があります。</p>
                    <p>アクセスする権利–あなたにはあなたの個人データのコピーを要求する権利があります。このサービスには少額の料金がかかる場合があります</p>
                    <p>訂正する権利–お客様には、不正確であると思われる情報の訂正を要求する権利があります。また、お客様には、不完全であると思われる情報の入力を要求する権利があります。</p>
                    <p>T彼は消去する権利–あなたには、特定の条件下で、私たちがあなたの個人データを消去することを要求する権利があります。</p>
                    <p>T処理を制限する権利–お客様には、特定の条件下で、お客様の個人データの処理を制限するよう要求する権利があります。</p>
                    <p>T処理に異議を唱える権利–特定の条件下で、お客様には個人データの処理に異議を唱える権利があります。</p>
                    <p>データの移植性に対する権利–お客様には、特定の条件下で、収集したデータを別の組織に転送するか、直接お客様に転送するように要求する権利があります。</p>
                    <p>ご要望がございましたら、1ヶ月以内に対応させていただきます。これらの権利の行使をご希望の場合は、お問い合わせください。</p>

                    <h2>子供の情報</h2>

                    <p>私たちの優先事項のもう1つの部分は、インターネットの使用中に子供を保護することです。保護者の方には、オンラインアクティビティを観察、参加、監視、指導することをお勧めします。</p>

                    <p>JaponGoは、13歳未満のお子様から故意に個人を特定できる情報を収集することはありません。お子様がこの種の情報を当社のWebサイトで提供したと思われる場合は、すぐにご連絡いただくことを強くお勧めします。私たちの記録からのそのような情報。</p>
                </Grid>
                )
            }
        </Fragment>
    )
}