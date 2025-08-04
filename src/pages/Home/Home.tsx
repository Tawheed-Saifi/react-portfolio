import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
// import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { AboutMe, Education, Experience, Projects } from "./constants";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import HighLightTypography from "../../components/HighlightTypography";
import { useColorScheme } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";
import useDarkMode from "@/hooks/darkModeHook";
import ColorModeIconDropdown from "@/theme/ColorModeIconDropdown";
import heroImage from "@/assets/open_pic.jpg";

export default function Home() {
  const [showHeaderContent, setShowHeaderContent] = useState<boolean>(false);
  const [focusedCardKey, setFocusedCardKey] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);

  // const navigate = useNavigate();
  const { mode, systemMode, setMode } = useColorScheme();
  const darkMode = useDarkMode();
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const isMobile = useRef<boolean>(window.innerWidth < 768);
  const activeRef = useRef<number>(0);
  const headerBox = useRef<any>(null);
  console.log("darkMode", darkMode, mode, systemMode);

  const roleInfos = [
    { name: "skills", backgroundColor: "lightblue", color: "white" },
    { name: "tools", backgroundColor: "lightcyan", color: "white" },
    { name: "testing", backgroundColor: "lightgreen", color: "white" },
    { name: "designSystems", backgroundColor: "aquamarine", color: "white" },
    { name: "developed", backgroundColor: "bisque", color: "white" },
  ] as const;

  // This creates a union type of the values
  type RoleInfo = (typeof roleInfos)[number];

  const handleFocus = (key: string) => {
    setFocusedCardKey(key);
  };

  const handleBlur = () => {
    setFocusedCardKey(null);
  };

  const handleHeaderClick = (index: number) => {
    const ele = itemsRef.current[index];
    if (ele)
      window.scrollTo({
        top: ele.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
  };

  const handleSetActive = () => {
    for (let i = 0; i < itemsRef.current.length; i++) {
      const top = itemsRef.current[i].getBoundingClientRect().top;
      // if (i == 0 && top >= 0 && top < window.innerHeight) {
      //   console.log("enter first", i, activeSection, activeSection != i);
      //   if (activeSection != i) setActiveSection(i);
      //   break;
      // }

      if (top >= 0 && top + 350 < window.innerHeight) {
        //   console.log("enter second", i, activeSection, activeSection != i);
        if (activeRef.current != i) {
          setActiveSection(i);
          if (i == itemsRef.current.length - 1)
            headerBox.current?.scrollTo(1000, 0);
          else if (i == 0) headerBox.current?.scrollTo(0, 0);
        }
        activeRef.current = i;
        break;
      }
    }
  };

  useEffect(() => {
    const handleSetFocus = () =>
      window.scrollY > 100
        ? setShowHeaderContent(true)
        : setShowHeaderContent(false);

    document.addEventListener("scroll", handleSetFocus);

    return () => document.removeEventListener("scroll", handleSetFocus);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleSetActive);
    return () => document.removeEventListener("scroll", handleSetActive);
  }, []);

  console.log(
    "showHeaderContent",
    showHeaderContent,
    isMobile.current,
    showHeaderContent && !isMobile.current
  );

  console.log("activeSection", activeSection);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          gap: 1,
          width: { xs: "100%", md: "fit-content" },
          overflow: "auto",
        }}
      >
        <Search />
        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box> */}
      <Box
        sx={{
          display: { md: "flex" },
          // flexDirection: { md: "row" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          gap: 4,
          overflow: "auto",
        }}
        className={`${styles.header} ${showHeaderContent ? styles.active : ""}`}
      >
        <Box
          ref={headerBox}
          sx={{
            width: { xs: "100%", md: "auto" },
            display: "inline-flex",
            flexDirection: "row",
            gap: { md: 3 },
            justifyContent: {
              xs: "space-between",
              // md: "space-around",
              md: "flex-start",
            },
            alignItems: "center",
            overflow: "auto",
          }}
        >
          {/* <button
            type="button"
            onClick={() =>
              mode == "dark" ? setMode("light") : setMode("dark")
            }
          >
            color mode
          </button> */}
          {["About Me", "Experience", "Projects", "Education"].map(
            (sectionName, i) => (
              <Chip
                key={sectionName}
                onClick={() => handleHeaderClick(i)}
                size="medium"
                label={sectionName}
                className={`${styles.headerBtn} ${
                  i == activeSection ? styles.active : ""
                }`}
              />
            )
          )}
          {/* <Chip
            onClick={() => handleHeaderClick(0)}
            size="medium"
            label="About me"
            className={styles.headerBtn}
          />
          <Chip
            onClick={() => handleHeaderClick(1)}
            size="medium"
            label="Experience"
            className={styles.headerBtn}
          />
          <Chip
            onClick={() => handleHeaderClick(2)}
            size="medium"
            label="Projects"
            className={styles.headerBtn}
          />
          <Chip
            onClick={() => handleHeaderClick(3)}
            size="medium"
            label="Education"
            className={styles.headerBtn}
          /> */}
          {isMobile.current && !showHeaderContent && (
            <ColorModeIconDropdown sx={{ mx: 2 }} />
          )}
        </Box>
        {!isMobile.current &&
          (showHeaderContent ? (
            <Typography
              className={styles.headerName}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              color={darkMode ? grey[200] : grey[900]}
            >
              Mohammed Tawheed
            </Typography>
          ) : (
            <ColorModeIconDropdown sx={{ mx: 2 }} />
          ))}
      </Box>
      <Grid
        ref={(ref) => {
          if (ref) itemsRef.current[0] = ref;
        }}
        container
        spacing={2}
        columns={12}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <img
            src={heroImage}
            alt="my pic"
            loading="lazy"
            className={styles.openPic}
          />
        </Grid>
        <Grid className={styles.aboutMeWrap} size={{ xs: 12, md: 8 }}>
          {AboutMe.details.map((para, i) => (
            <Paper
              elevation={0}
              className={styles.aboutMePara}
              sx={{
                paddingInline: 2,
                paddingBlock: 1,
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: darkMode
                    ? "0 0px 2px 2px rgba(255, 255, 255, 0.1)"
                    : 2,
                },
                cursor: "pointer",
              }}
              key={i}
            >
              <HighLightTypography
                component={"p"}
                fontSize={15}
                marginBottom={1}
                text={para}
                highlight={AboutMe.highlights}
                highlightProps={{
                  sx: { fontWeight: 550, color: darkMode ? "whitesmoke" : "" },
                }}
                color={darkMode ? blueGrey[100] : blueGrey[900]}
              />
            </Paper>
          ))}
        </Grid>
      </Grid>
      <Grid
        ref={(ref) => {
          if (ref) itemsRef.current[1] = ref;
        }}
        display="flex"
        gap={2}
        flexDirection={"column"}
      >
        {Experience.map((exp, i) => (
          <Card
            key={exp.companyName}
            className={
              focusedCardKey == `experience-${i}` ? styles.cardFocused : ""
            }
            onMouseEnter={() => handleFocus(`experience-${i}`)}
            onMouseLeave={() => handleBlur()}
          >
            <Grid container spacing={2} columns={12}>
              <Grid size={{ xs: 12, md: 4 }}>
                {/* <img src="public/office pic.jpg" /> */}
                <Typography
                  variant="h6"
                  // color="#202020"
                  fontWeight={"500"}
                  marginBottom={0}
                >
                  {exp.role}
                </Typography>
                <Typography color="text.secondary">{exp.duration}</Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                  marginTop={1}
                >
                  {roleInfos.map(
                    (infoType) =>
                      exp[infoType.name] && (
                        <Grid
                          key={infoType.name}
                          display="flex"
                          gap={1}
                          flexWrap={"wrap"}
                        >
                          {exp[infoType.name]?.map((skill) => (
                            <Chip
                              key={skill.name}
                              label={skill.name}
                              // sx={{
                              //   backgroundColor: infoType.backgroundColor,
                              //   borderColor: infoType.backgroundColor,
                              //   color: `${infoType.color} !important`,
                              //   // "&:hover": {
                              //   //   backgroundColor: infoType.backgroundColor,
                              //   //   opacity: 0.8,
                              //   // },
                              // }}
                              // color={infoType.color}
                              className={`${styles.chip} ${
                                styles[infoType.name]
                              }`}
                              onClick={() =>
                                skill.page
                                  ? window.open(skill.page, "_blank")
                                  : null
                              }
                            />
                          ))}
                        </Grid>
                      )
                  )}
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography
                  variant={isMobile.current ? "h6" : "h5"}
                  sx={{ marginBottom: "4px" }}
                  // color="#202020"
                  fontWeight={"600"}
                >
                  {exp.companyName}
                </Typography>
                <Typography component="div" variant="body1" paddingBlock={0}>
                  <ul style={{ paddingLeft: 20, marginBlock: 0 }}>
                    {exp.reponsibilities.map((resp, i) => (
                      <HighLightTypography
                        key={i}
                        text={resp}
                        highlight={exp.highlight}
                        highlightProps={{
                          sx: {
                            fontWeight: 550,
                            color: darkMode ? "whitesmoke" : "",
                          },
                        }}
                        color={darkMode ? blueGrey[100] : blueGrey[900]}
                        component="li"
                      />
                    ))}
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Grid>
      <Grid
        ref={(ref) => {
          if (ref) itemsRef.current[2] = ref;
        }}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        {Projects.map((project, i) => (
          <Card
            key={project.name}
            className={
              focusedCardKey == `projects-${i}` ? styles.cardFocused : ""
            }
            onMouseEnter={() => handleFocus(`projects-${i}`)}
            onMouseLeave={() => handleBlur()}
          >
            <Grid display="flex" flexDirection="column" gap={1}>
              <Grid>
                <Typography
                  variant={isMobile.current ? "h6" : "h4"}
                  marginBottom={0}
                >
                  {project.name}
                </Typography>
                <Typography variant="body1" color="gray">
                  {project.techUsed}
                </Typography>
              </Grid>
              <HighLightTypography
                variant="body1"
                text={project.intro}
                highlight={project.introHighlights}
                highlightProps={{
                  sx: { fontWeight: 550, color: darkMode ? "whitesmoke" : "" },
                }}
              />
              <Grid>
                <ul style={{ paddingLeft: 20, marginBlock: 0 }}>
                  {project.work.map((work, i) => (
                    <HighLightTypography
                      key={i}
                      text={work}
                      component={"li"}
                      highlight={project.highlights}
                      highlightProps={{
                        sx: {
                          fontWeight: 550,
                          color: darkMode ? "whitesmoke" : "",
                        },
                      }}
                      color={darkMode ? blueGrey[100] : blueGrey[900]}
                    />
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Grid>
      <Grid
        ref={(ref) => {
          if (ref) itemsRef.current[3] = ref;
        }}
        container
        columns={12}
        spacing={2}
      >
        {Education.map((edu, i) => (
          <Grid key={i} size={{ xs: 12, md: 6 }}>
            <Card
              className={
                focusedCardKey == `education-${i}` ? styles.cardFocused : ""
              }
              sx={{ height: "100%" }}
              onMouseEnter={() => handleFocus(`education-${i}`)}
              onMouseLeave={() => handleBlur()}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 1.2,
                }}
              >
                {edu.degree}
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  sx={{ fontSize: 18, color: "gray", lineHeight: 1.3 }}
                >
                  {edu.course}
                </Typography>
                <Typography
                  color={darkMode ? grey[500] : grey[600]}
                  sx={{ fontSize: 16, lineHeight: 1.3 }}
                >
                  {edu.score}
                </Typography>
              </Box>
              <Typography
                fontWeight={500}
                color={darkMode ? grey[200] : grey[900]}
              >
                {edu.school ?? `${edu.college} - ${edu.university}`}
              </Typography>
              <Typography color={darkMode ? blueGrey[100] : blueGrey[900]}>
                {edu.location}
              </Typography>
              <Typography fontWeight={600} fontSize={15}>
                Courses:
              </Typography>
              {edu.relavantCourses.map((course) => (
                <Typography
                  key={course}
                  color={darkMode ? blueGrey[100] : blueGrey[900]}
                >
                  {course}
                </Typography>
              ))}
              {edu.projects && (
                <>
                  <Typography fontWeight={600} fontSize={15}>
                    Projects:
                  </Typography>
                  {edu.projects.map((project) => (
                    <Typography
                      key={project}
                      color={darkMode ? blueGrey[100] : blueGrey[900]}
                    >
                      {project}
                    </Typography>
                  ))}
                </>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
