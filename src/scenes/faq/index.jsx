import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title="FAQ" subtitle="Frequently Asked Questions"></Header>
      <Accordion sx={{ background: colors.primary[400], mb: "5px" }}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography variant="h5">An Important Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            expedita perspiciatis veritatis magni voluptates sapiente! Dicta
            maiores eius accusamus quis error sit, laborum quasi reiciendis sunt
            laudantium a pariatur nulla.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background: colors.primary[400], mb: "5px" }}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography variant="h5">An Important Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            expedita perspiciatis veritatis magni voluptates sapiente! Dicta
            maiores eius accusamus quis error sit, laborum quasi reiciendis sunt
            laudantium a pariatur nulla.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background: colors.primary[400], mb: "5px" }}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography variant="h5">An Important Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            expedita perspiciatis veritatis magni voluptates sapiente! Dicta
            maiores eius accusamus quis error sit, laborum quasi reiciendis sunt
            laudantium a pariatur nulla.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
