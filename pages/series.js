import IndexLayaut from "./layaut/IndexLayaut"
import DataWithFilter from '../components/LinkPagesWFilter'

const Series = () => {
  return (
    <IndexLayaut title="Series">
        <DataWithFilter path={"/series"} url={"/discover/tv"} title="Series"/>
    </IndexLayaut>
  )
}

export default Series