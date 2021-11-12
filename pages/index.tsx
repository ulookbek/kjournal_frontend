import MainLayout from '../layouts/MainLayout'
import ArticleCard from '../components/ArticleCard'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <MainLayout>
      <Container maxWidth={'md'}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Container>
    </MainLayout>
  )
}
