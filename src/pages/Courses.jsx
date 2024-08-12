// import React from "react";
// import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

// const Courses = () => {
//   const events = [
//     {
//       id: 1,
//       date: "30 August-5 September 2024",
//       category: "ΦΕΣΤΙΒΑΛ",
//       title:
//         "Όλα όσα θα γίνουν στο SeptemberFest Nicosia Beer Fun Festival 2024",
//       description:
//         "Μάθε το ολοκληρωμένο πρόγραμμα και πως να προμηθευτείς το εισιτήριό σου",
//       image: "https://your-image-url-1.jpg",
//     },
//     {
//       id: 2,
//       date: "21 August 2024",
//       category: "BARS & CLUBS",
//       title: "Μια ιδιαίτερη βραδιά μουσικής σε ένα όμορφο χώρο δίπλα στο κύμα",
//       description: "Μαζί με τον Θανάση Βασιλόπουλο",
//       image: "https://your-image-url-2.jpg",
//     },
//     {
//       id: 3,
//       date: "22 August 2024",
//       category: "ΜΟΥΣΙΚΗ",
//       title:
//         "Μια βραδιά μουσικής με τη λάμψη του φεγγαριού στο Κάστρο Λάρνακας",
//       description: "Με τραγούδια της θάλασσας, της νοσταλγίας και του έρωτα",
//       image: "https://your-image-url-3.jpg",
//     },
//   ];

//   function EventCard({ event }) {
//     return (
//       <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//           component="img"
//           height="140"
//           image={event.image}
//           alt={event.title}
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             {event.date}
//           </Typography>
//           <Typography gutterBottom variant="h6" component="div">
//             {event.category}
//           </Typography>
//           <Typography variant="h5" component="div">
//             {event.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {event.description}
//           </Typography>
//         </CardContent>
//       </Card>
//     );
//   }

//   function EventList() {
//     return (
//       <Grid container spacing={3}>
//         {events.map((event) => (
//           <Grid item key={event.id} xs={12} sm={6} md={4}>
//             <EventCard event={event} />
//           </Grid>
//         ))}
//       </Grid>
//     );
//   }
// };
// export default Courses;
import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

const Courses = () => {
  const events = [
    {
      id: 1,
      date: "30 August-5 September 2024",
      category: "FESTIVAL",
      title:
        "Everything that will happen at the SeptemberFest Nicosia Beer Fun Festival 2024",
      description: "Find out the full programme and how to get your ticket",
      image:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      date: "21 August 2024",
      category: "BARS & CLUBS",
      title: "A special evening of music in a beautiful place by the sea",
      description: "Together with Thanasis Vassilopoulos",
      image:
        "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      date: "22 August 2024",
      category: "MUSIC",
      title: "An evening of music with the glow of the moon at Larnaca Castle",
      description: "With songs of the sea, nostalgia and love",
      image:
        "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  function EventCard({ event }) {
    // sx={{ maxWidth: 345, mt: 10, ml: 7 }}
    return (
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          mx: 2,
          mt: 10,
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={event.image}
          alt={event.title}
        />
        <CardContent sx={{ flexGrow: 1, padding: 2 }}>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ fontWeight: "medium" }}
          >
            {event.date}
          </Typography>
          <Typography
            gutterBottom
            component="div"
            variant="subtitle2"
            sx={{ fontWeight: "bold", marginTop: 1, marginBottom: 0.5 }}
          >
            {event.category}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", marginBottom: 1 }}
          >
            {event.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {event.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  function EventList() {
    return (
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    );
  }

  // Возвращаем компонент EventList из Courses
  return <EventList />;
};

export default Courses;
