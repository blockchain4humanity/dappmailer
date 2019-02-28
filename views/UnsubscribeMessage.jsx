var React = require('react');

class UnsubscribeMessage extends React.Component {
  render() {
    const { message } = this.props;

    console.log(message)

    const bodyStyle = {
      color: "white",
      backgroundColor: "#49a79b"
    }

    const containerStyle = {
      marginTop: "150px"
    }

    const imageStyle = {
      margin: "30px",
      width: "150px"
    }

    return (
      <html>
        <head>
          <title>Unsubscribe from Blockchain for Humanity notification emails</title>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous"></link>
        </head>
        <body style={bodyStyle}>
          <div className="container" style={containerStyle}>
            <center>
              <img src="/images/b4h-logo.svg" width="48px" style={imageStyle}/>
              <h2 dangerouslySetInnerHTML={{__html: message}}></h2>
            </center>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = UnsubscribeMessage;