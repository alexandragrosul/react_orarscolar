import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const NewsList = ({ news }) => {
  if (news.length === 0) return <p>Din pacte la moment nu avem stiri</p>;
  console.log(news);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {news.map((newsItem) => (
        <ListItem alignItems="flex-start" key={newsItem.id}>
          <ListItemText
            primary={newsItem.name}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {newsItem.text}
                </Typography>
                <Typography>{` ${newsItem.date}`}</Typography>
              </>
            }
          />
        </ListItem>
      ))}
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default NewsList;
