import { useRouteError } from 'react-router-dom'

import { Button, Result, Typography } from 'antd'

const { Paragraph, Text } = Typography

function ErrorBoundary() {
  const error: any = useRouteError()

  return (
    <Result
      status="error"
      title="Oh No!"
      subTitle="Seems like there was an error with your request."
      extra={[
        <Button type="default" key="console">
          Go to previous page
        </Button>,
        <Button key="buy">Go to Home Page</Button>,
      ]}
    >
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          {`The following error occured: ${error?.message ?? ''}`}
        </Text>
      </Paragraph>
    </Result>
  )
}

export default ErrorBoundary
