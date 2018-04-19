// @flow

import * as React from "react";

import Container from "../components/Container.react";
import Page from "../components/Page/Page.react";
import Header from "../components/Header/Header.react";
import Icon from "../components/Icon/Icon.react";
import Button from "../components/Button/Button.react";

type Props = {|
  +title: string,
  +subtitle: string,
  +details?: string,
|};

function DefaultErrorPage(props: Props): React.Node {
  const { title, subtitle, details } = props;
  return (
    <Page className="text-center">
      <Container>
        <Header.H1 className="display-1 text-muted mb-5">{title}</Header.H1>
        <Header.H2>{subtitle}</Header.H2>
        {details && (
          <Header.H4 className="text-muted font-weight-normal mb-7">
            {details}
          </Header.H4>
        )}
        <Button className="btn-primary">
          <Icon className="mr-2" name="arrow-left" />
          Go back
        </Button>
      </Container>
    </Page>
  );
}

export default DefaultErrorPage;
