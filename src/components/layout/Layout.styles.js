import styled from 'styled-components'

export const ContentContainer = styled.main`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`

export const BaseLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const ContentSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
`