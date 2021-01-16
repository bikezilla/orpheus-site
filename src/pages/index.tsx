import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"
import { Card, Carousel, ListGroup, ListGroupItem } from "react-bootstrap"
import { GiMountains, GiSafetyPin, GiUpgrade } from "react-icons/gi"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const query = useStaticQuery<GatsbyTypes.IndexImagesQueryQuery>(
    graphql`
      query IndexImagesQuery {
        slider: allFile(filter: { relativeDirectory: { eq: "index-slider" } }) {
          nodes {
            id
            childImageSharp {
              fluid(maxWidth: 1140, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        footer: file(relativePath: { eq: "index-footer.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const [sliderIndex, setSliderIndex] = useState(1)

  const onSlideAdvanced = (index: number) => {
    setSliderIndex(index == 0 ? index + 1 : index)
  }

  return (
    <Layout>
      <SEO title="Начало" />

      <div className="mt-5 orph-slider">
        <Carousel
          activeIndex={sliderIndex}
          onSelect={onSlideAdvanced}
          controls={false}
          indicators={false}
          keyboard={false}
        >
          <Carousel.Caption className="orph-carousel-caption">
            <h2>
              Ръководство и единен стандарт за маркиране на маршрути за
              планинско колоездене
            </h2>
          </Carousel.Caption>
          {query.slider.nodes.map(image => (
            <Carousel.Item key={image.id}>
              <Img fluid={image.childImageSharp!.fluid! as any} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="text-center mt-3">
        <h1>За проекта</h1>
        <div className="mt-3">
          <p>
            Създаването, развитието и популяризирането на единен стандарт за
            маркиране на маршрути за планинско колоездене в България, е
            инициатива на четири български организации с дългогодишен опит в
            планинското колездене - Сдружение "Байкария", Сдружение "Алабак",
            Велоклуб "Крива Спица" и MTB-BG.com
          </p>
        </div>
      </div>

      <div className="text-center mt-5 ">
        <h4>Водещите принципи, заложени в стандарта, са:</h4>
      </div>

      <div className="card-deck mt-3">
        <GuidingPrincipleCard
          title="Безопасност"
          subtitle="на практикуващите планинско колоездене и други ползватели на
                планините"
          icon={<GiSafetyPin size={100} />}
        >
          <p>
            В последното десетилетие се наблюдава неколкократно увеличаване на
            практикуващите планинско колоездене в България, редом с увеличен
            брой и други ползватели на планините.
          </p>
          <p>
            Разработената маркировка носи информация както за ориентация и
            навигация, така и за трудността на терена, и спомага за повишаване
            ползваемостта и безопасността на планините и маршрутите.
          </p>
        </GuidingPrincipleCard>
        <GuidingPrincipleCard
          title="Опазване"
          subtitle="на маршрутите, културното и природно богатсво на българските планини"
          icon={<GiMountains size={100} />}
        >
          <p>
            Все повече пътеки, маршрути и заобикалящата ги природа в планините
            са подложени на унищожаване. Дърводобив, движение на МПС,
            застрояване, пожари - са само част от явленията, застрашаващи това
            национално богатство.
          </p>
          <p>
            Маркирането и легализирането на пътеките и маршрутите е единственият
            начин те да бъдат разпознати законово и в последствие опазени.
          </p>
        </GuidingPrincipleCard>
        <GuidingPrincipleCard
          title="Развитие"
          subtitle="на планинските райони, нестопанските организации и туристическите продукти"
          icon={<GiUpgrade size={100} />}
        >
          <p>
            С разнообразния си характер и красота, съчетана с богат фонд
            естествени и изкуствени пътеки и черни пътища, българските планини
            предоставят широки възможности за развитие на туристически продукти
            и услуги.
          </p>
          <p>
            Предложеният стандарт за маркировка предоставя гъвкавост за
            комбиниране и дефиниране на различни маршрути в даден район, от
            наличните пътища и пътеки. Същевременно, позволява и бъдещо развитие
            на маршрутната мрежа в района.
          </p>
        </GuidingPrincipleCard>
      </div>

      <div className="text-center mt-5">
        <h4>Стандартът е представен в следните секции:</h4>
        <Card>
          <ListGroup>
            <ListGroupItem>
              В секция <Link to="/guide">"Правилник"</Link>
              са описани основните понятия, маркировъчните знаци, принципите и
              правилата, за изработка и прилагане на маркировъчен план за даден
              район.
            </ListGroupItem>
            <ListGroupItem>
              Съвети от практическото прилагане на стандарта "на терен", като
              избор на материал и особености при поставяне на маркировъчните
              знаци и други, ще намерите в
              <Link to="/advices">"Полезни съвети"</Link>.
            </ListGroupItem>
            <ListGroupItem>
              Примери за логиката при формиране на маркировъчни планове може да
              разгледате за <Link to="/varvara">Байк Център Варвара</Link>.
            </ListGroupItem>
            <ListGroupItem>
              Маркираните по стандарта маршрути в България до момента, може да
              разгледате в секция <Link to="/map">"Карта"</Link>.
            </ListGroupItem>
            <ListGroupItem>
              Списък с организациите, заявили подкрепа за инициативата, ще
              откриете в <Link to="/clubs">"Организации"</Link>
            </ListGroupItem>
            <ListGroupItem>
              Информация за опита на организациите и авторите на проекта - в{" "}
              <Link to="/team">"Екип"</Link>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>

      <div className="mt-5">
        <Card>
          <Img fluid={query.footer!.childImageSharp!.fluid! as any} />
        </Card>
      </div>
    </Layout>
  )
}

function GuidingPrincipleCard({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string
  subtitle: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center text-success">
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
        </Card.Title>
        <Card.Text className="text-center text-success">{icon}</Card.Text>
        <Card.Text className="mt-3">{children}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default IndexPage
