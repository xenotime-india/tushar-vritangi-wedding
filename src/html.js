import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta
          name="description"
          content="With the divine grace of the almighty, inviting you and your family to Tushar's wedding to be held on 07th December at Hotel, Lemonade, Alwar from 7:00 PM onwards."
        />
        <meta name="author" content="Tushar & Vritangi" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Wedding Invitation | 07th Dec | Hotel, Lemonade, Alwar"
        />
        <meta
          property="og:description"
          content="With the divine grace of the almighty, inviting you and your family to Tushar's wedding to be held on 07th December at Hotel, Lemonade, Alwar from 7:00 PM onwards."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/vinitshahdeo/vinitshahdeo/master/images/sonali.jpeg"
        />
        <meta property="og:url" content="" />
        <meta
          property="og:site_name"
          content="Tushar & Vritangi Wedding Invitation | 07th Dec"
        />
        <meta name="twitter:card" content="website" />
        <meta
          name="twitter:site"
          content="Tushar & Vritangi Wedding Invitation | 07th Dec"
        />
        <meta
          name="twitter:title"
          content="Tushar & Vritangi Wedding Invitation | 07th Dec"
        />
        <meta
          name="twitter:description"
          content="With the divine grace of the almighty, inviting you and your family to Tushar's wedding to be held on 07th December at Hotel, Lemonade, Alwar from 7:00 PM onwards."
        />

        <title>Wedding Invitation | 07th Dec | Hotel, Lemonade, Alwar</title>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/timoschaefer/jQuery-Sakura/jquery-sakura.min.js"></script>
        <script src="./js/script.js"></script>
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
