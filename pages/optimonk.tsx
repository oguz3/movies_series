import Layout from "@components/Layout";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        Optimonk
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(e,a){
                var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol;
                t=e.createElement("script");t.type="text/javascript";
                t.charset="utf-8";t.async=!0;t.defer=!0;
                t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);
            })(document,"162286");`,
          }}
        ></script>
      </div>
    </Layout>
  );
};

export default IndexPage;
