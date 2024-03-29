import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { Fragment, useContext } from "react";
import client from "../apollo/client";
import Animation from "../components/Animation/Animation";
import GridItem from "../components/GridItem/GridItem";
import Head from "../components/Head/Head";
import Hero from "../components/Hero/Hero";
import { StyledLink } from "../components/Link/Styles/StyledLink";
import Navbar from "../components/Navbar/Navbar";
import { Large } from "../components/Typo/Large";
import { Micro } from "../components/Typo/Micro";
import strings from "../data/strings";
import {
  Areas,
  LandingpageGridRow as LandingpageGridRowType,
  Query,
} from "../generated/types";
import { GET_LANDINGPAGE } from "../graphql/GetLandingpage";
import { allProjects } from "../helpers/consts";
import { EnhancedProject, enhanceProjects } from "../helpers/enhanceProjects";
import { splitArray } from "../helpers/splitArray";
import {
  GridItemWrapper,
  Intro,
  IntroWrapper,
  LandingHeroPageLogotypes,
  LandingpageGrid,
  LandingpageGridRow,
  LandingpageHeroClients,
  LandingPageHeroLogotype,
  StyledIndex,
} from "../pagestyles/StyledIndex";
import { Blockquote, Quote } from "../pagestyles/StyledStudio";
import { HoverProvider } from "./_app";

interface indexProps {
  landingpageGrid: LandingpageGridRowType[];
  areas: Areas;
}

const Index = ({ landingpageGrid, areas }: indexProps) => {
  const landingpageStrings = strings.landingPage;
  const { setCursorType } = useContext(HoverProvider);

  const [firstGridPart, secondGridPart] = splitArray<LandingpageGridRowType>(
    landingpageGrid,
    Math.floor(landingpageGrid.length / 2)
  );

  const landingpageGridWithQuotes = [
    ...firstGridPart,
    landingpageStrings.quotes[0],
    ...secondGridPart,
  ];

  const renderTextWithLink = ({ type, body, href }, i) => {
    if (type === `text`) {
      return <Fragment key={i}>{body}</Fragment>;
    }
    if (type === `link`) {
      return (
        <Fragment key={i}>
          <StyledLink
            as={"a"}
            href={href}
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={() => setCursorType("normal")}>
            {body}
          </StyledLink>
          <br />
        </Fragment>
      );
    }
  };

  return (
    <>
      {/* TODO add og image */}
      <Head
        ogDescription={landingpageStrings.hero.subHeader}
        ogImageSrc={""}
        pageName={"STEEZY Studio"}
        ogTitle={"STEEZY Studio"}
      />
      <Navbar areas={areas.items} />
      <StyledIndex>
        <Hero
          asset={{ url: `/videos/steezy-loop.mp4`, _type: "Video" }}
          header={(openDialog, setOpenDialog) => (
            <>
              <StyledLink
                as={`span`}
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("normal")}
                onClick={() => setOpenDialog(!openDialog)}>
                {landingpageStrings.hero.header.cta}
              </StyledLink>
              {landingpageStrings.hero.header.rest}
            </>
          )}
          perex={landingpageStrings.hero.subHeader}>
          <LandingpageHeroClients>
            <Micro>{landingpageStrings.hero.clients.header}</Micro>
            <LandingHeroPageLogotypes>
              {landingpageStrings.hero.clients.logotypes.map(
                ({ src, alt }, i) => (
                  <LandingPageHeroLogotype
                    key={i}
                    src={`/icons/${src}`}
                    alt={alt}
                  />
                )
              )}
            </LandingHeroPageLogotypes>
          </LandingpageHeroClients>
        </Hero>
        <IntroWrapper data-scroll data-scroll-speed='2'>
          <Intro>
            <Micro>{landingpageStrings.intro.subHeader}</Micro>
            <div>
              <Large as={`span`}>
                {landingpageStrings.intro.perex.map(renderTextWithLink)}
              </Large>
            </div>
          </Intro>
        </IntroWrapper>

        <LandingpageGrid>
          {landingpageGridWithQuotes.map((row, i) => {
            if (row.__typename === "Quote") {
              return (
                <LandingpageGridRow key={i} className={"blockquote"}>
                  <GridItemWrapper
                    className='single'
                    data-scroll
                    data-scroll-speed='1'>
                    <Animation
                      type={"fadeFromBottom"}
                      delay={0.2}
                      duration={1.2}>
                      <motion.div>
                        <Blockquote className='landingpage'>
                          <Quote className=''>
                            <Large className=''>
                              {row.quote.map(renderTextWithLink)}
                            </Large>
                            <Micro className='with-dash reversed'>
                              {row.name}{" "}
                            </Micro>
                            <Micro className='lowcase dash-margin'>
                              {row.position}
                            </Micro>
                          </Quote>
                        </Blockquote>
                      </motion.div>
                    </Animation>
                  </GridItemWrapper>
                </LandingpageGridRow>
              );
            }
            if (row.__typename === `LandingpageGridRow`) {
              const isSingle = row.grid_row.length === 1;

              return (
                <LandingpageGridRow key={row._id}>
                  {row.grid_row.map(
                    ({
                      project_grid_name,
                      landingpage_grid_image,
                      _slug,
                      _id,
                      areas,
                    }: EnhancedProject) => {
                      return (
                        <GridItemWrapper
                          key={_id}
                          offset_amount={row.offset_amount}
                          className={`${row.offset ? "offset" : ""} ${
                            isSingle ? "single" : ""
                          }`}>
                          <GridItem
                            type={landingpage_grid_image[0]._type}
                            areas={areas}
                            projectName={project_grid_name}
                            videoThumb={landingpage_grid_image[0].cover}
                            width={landingpage_grid_image[0].width}
                            height={landingpage_grid_image[0].height}
                            src={
                              landingpage_grid_image[0]._type === "Video"
                                ? landingpage_grid_image[0].cdn_files[0].url
                                : landingpage_grid_image[0].url
                            }
                            slug={_slug}
                            key={_slug}
                          />
                        </GridItemWrapper>
                      );
                    }
                  )}
                </LandingpageGridRow>
              );
            }
          })}
          <LandingpageGridRow>
            <div></div>
            <Large>
              <StyledLink
                as={"a"}
                href={`/projects/all-projects`}
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("normal")}>
                {strings.globals.allProjects}
              </StyledLink>
            </Large>
          </LandingpageGridRow>
        </LandingpageGrid>
      </StyledIndex>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.query<Query>({ query: GET_LANDINGPAGE });

  const enhancedGrid =
    data.data.LandingpageGrids.items[0].landingpage_projects_grid.map((row) => {
      return {
        ...row,
        grid_row: enhanceProjects(row.grid_row, data.data.Areas),
      };
    });

  return {
    props: {
      landingpageGrid: enhancedGrid,
      areas: data.data.Areas,
    },
    revalidate: Number(process.env.REVALIDATE),
  };
};

export default Index;
