import styled from "styled-components"

function Stats(){
  return(
    <Layout>
      <Text>
        이번주는 술을 N번 덜 드셨군요!
      </Text>
    </Layout>
  )
}

export default Stats

const Layout = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-top:16px;
  margin-bottom: 16px;
`

const Text = styled.div`
  font-size: 16px;
  margin: 20px;
  margin-bottom: 16px;
  font-weight: bold;
`
