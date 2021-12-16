
import { Grid } from "@mui/material";
import { useContext } from "react";
import {LangContext} from '../../context/lang-context/lang-context.js';
import './legal-page.css'


function LegalPage() {



    const [lang] = useContext(LangContext);

    return (

        
        <Grid item container xs={9} justifyContent='center' flexDirection='column' alignItems='center' rowGap={3}>
            {lang==='en'?
            (
                <div className="legal-page__container">
                <h1>Cookie Policy for JaponGo</h1>

                <p>This is the Cookie Policy for JaponGo, accessible from </p>
    
                <p><strong>What Are Cookies</strong></p>
    
                <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
    
                <p><strong>How We Use Cookies</strong></p>
    
                <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
    
                <p><strong>Disabling Cookies</strong></p>
    
                <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the Cookies Policy Generator from CookiePolicyGenerator.com.</p>
                <p><strong>The Cookies We Set</strong></p>
    
                <ul>
    
                    <li>
                        <p>Account related cookies</p>
                        <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
                    </li>
    
                    <li>
                        <p>Login related cookies</p>
                        <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
                    </li>
    
    
    
    
    
                    <li>
                        <p>Site preferences cookies</p>
                        <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                    </li>
    
                </ul>
    
                <p><strong>Third Party Cookies</strong></p>
    
                <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
    
                <ul>
    
    
    
                    <li>
                        <p>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</p>
                    </li>
    
    
    
    
    
    
    
                </ul>
    
                <p><strong>More Information</strong></p>
    
                <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
    
                {/* <p>For more general information on cookies, please read <a href="https://www.generateprivacypolicy.com/#cookies">"Cookies" article from the Privacy Policy Generator</a>.</p> */}
    
                <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
    
                <ul>
                    <li>Email: </li>
                    <li>By visiting this link: </li>
                </ul>
                </div>
            )
            :
            (
                <div className="legal-page__container">
                <h1>JaponGoのCookieポリシー</h1>

    
                <p><strong>クッキーとは</strong></p>
    
                <p>ほとんどすべての専門的なWebサイトで一般的に行われているように、このサイトではCookieを使用しています。Cookieは、コ​​ンピューターにダウンロードされる小さなファイルであり、エクスペリエンスを向上させます。このページでは、収集する情報、その使用方法、およびこれらのCookieを保存する必要がある理由について説明します。また、これらのCookieが保存されないようにする方法についても説明しますが、これにより、サイトの機能の特定の要素がダウングレードまたは「破損」する可能性があります。</p>
    
                <p><strong>クッキーの使い方</strong></p>
    
                <p>クッキーは、以下に詳述するさまざまな理由で使用されます。残念ながら、ほとんどの場合、Cookieがこのサイトに追加する機能を完全に無効にすることなく、Cookieを無効にするための業界標準のオプションはありません。使用するサービスを提供するために使用される場合に備えて、Cookieが必要かどうかわからない場合は、すべてのCookieを残すことをお勧めします。</p>
    
                <p><strong>Disabling Cookies</strong></p>
    
                <p>ブラウザの設定を調整することにより、Cookieの設定を防ぐことができます（これを行う方法については、ブラウザのヘルプを参照してください）。 Cookieを無効にすると、このWebサイトやアクセスする他の多くのWebサイトの機能に影響することに注意してください。通常、Cookieを無効にすると、このサイトの特定の機能も無効になります。したがって、Cookieを無効にしないことをお勧めします。このCookieポリシーは、CookiePolicyGenerator.comのCookieポリシージェネレーターを使用して作成されました。</p>
                <p><strong>私たちが設定したクッキー</strong></p>
    
                <ul>
    
                    <li>
                        <p>アカウント関連のCookie</p>
                        <p>あなたが私たちと一緒にアカウントを作成する場合、私たちはサインアッププロセスと一般的な管理の管理のためにクッキーを使用します。これらのCookieは通常、ログアウトすると削除されますが、場合によっては、ログアウトしたときにサイトの設定を記憶するために後で残る場合があります</p>
                    </li>
    
                    <li>
                        <p>ログイン関連のCookie</p>
                        <p>この事実を思い出せるように、ログイン時にCookieを使用します。これにより、新しいページにアクセスするたびにログインする必要がなくなります。これらのCookieは通常、ログアウト時に削除またはクリアされ、ログイン時に制限された機能と領域にのみアクセスできるようにします。</p>
                    </li>
    
    
    
    
    
                    <li>
                        <p>サイト設定Cookie</p>
                        <p>このサイトで素晴らしい体験を提供するために、私たちはあなたがそれを使用するときにこのサイトがどのように実行されるかについてあなたの好みを設定する機能を提供します。あなたの好みを記憶するために、あなたがページを操作するときはいつでもこの情報があなたの好みの影響を受けることができるようにクッキーを設定する必要があります。</p>
                    </li>
    
                </ul>
    
                <p><strong>サードパーティのCookie</strong></p>
    
                <p>特別な場合には、信頼できるサードパーティが提供するCookieも使用します。次のセクションでは、このサイトで遭遇する可能性のあるサードパーティのCookieについて詳しく説明します。</p>
    
                <ul>
    
    
    
                    <li>
                        <p>時々、私たちは新機能をテストし、サイトの配信方法に微妙な変更を加えます。まだ新機能をテストしている場合、これらのCookieを使用して、ユーザーが最も高く評価している最適化を理解しながら、サイトで一貫したエクスペリエンスを確実に受けることができます。</p>
                    </li>
    
    
    
    
    
    
    
                </ul>
    
                <p><strong>詳しくは</strong></p>
    
                <p>うまくいけば、それがあなたのために物事を明らかにし、あなたが必要かどうかわからないことがある場合は、私たちのサイトで使用する機能の1つと相互作用する場合に備えてCookieを有効にしておく方が通常は安全です。</p>
    
                {/* <p>For more general information on cookies, please read <a href="https://www.generateprivacypolicy.com/#cookies">"Cookies" article from the Privacy Policy Generator</a>.</p> */}
    
                <p>ただし、それでも詳細情報をお探しの場合は、次のいずれかの連絡方法でお問い合わせください。</p>
    
                <ul>
                    <li>メール: </li>
                    <li>このリンクにアクセスして: </li>
                </ul>
                </div>
            )
        
        }
           
        </Grid>
    )
}

export default LegalPage;