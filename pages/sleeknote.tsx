import Layout from "@components/Layout";
import Head from "next/head";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Head>
        <script
          id="sleeknoteScript"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: ` (function () {
              var sleeknoteScriptTag = document.createElement("script");
              sleeknoteScriptTag.type = "text/javascript";
              sleeknoteScriptTag.charset = "utf-8";
              sleeknoteScriptTag.src = ("//sleeknotecustomerscripts.sleeknote.com/55386.js");
              var s = document.getElementById("sleeknoteScript"); 
              s.parentNode.insertBefore(sleeknoteScriptTag, s); 
            })();`,
          }}
        ></script>
      </Head>
      <div className="container">sleeknote</div>
    </Layout>
  );
};

export default IndexPage;
