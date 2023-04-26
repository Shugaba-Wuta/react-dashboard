import FullCalendar from "@fullcalendar/react"
import { useState } from "react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from "@fullcalendar/list"
import interactionPlugin from "@fullcalendar/interaction"
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material"
import { formatDate } from '@fullcalendar/core';


import Header from "../../components/Header"
import { tokens } from "../../theme"

const Calendar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])
    const handleDateClick = (selectedDate) => {
        const title = prompt("Please enter a new title for your event")
        const calendarApi = selectedDate.view.calendar
        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                id: `${selectedDate.dateStr}-${title}`,
                title,
                start: selectedDate.startStr,
                end: selectedDate.endStr,
                allDay: selectedDate.allDay
            })
        }
    }
    const handleEventClick = (selectedDate) => {
        if (window.confirm(`Are you sure you want to delete the event '${selectedDate.event.title}'`)) {
            selectedDate.event.remove()
        }
    }
    return (
        <Box m={"20px"}>
            <Header title={"CALENDAR"} subtitle={"Manage Calendar Events"}></Header>
            <Box
                display={"flex"}
            >
                {/* Calendar side */}
                <Box flex={"1 1 20%"} color={colors.gray[400]} p={"15px"} borderRadius={"4px"} backgroundColor={colors.primary[400]}>
                    <Typography variant="h5" fontWeight={"bold"} color={colors.greenAccent[100]}>
                        Events
                    </Typography>
                    <List>
                        {currentEvents.map((event) => {
                            return <ListItem
                                key={event.id}
                                sx={{ backgroundColor: colors.primary[700], m: "10px 0", borderRadius: "2px", }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric"
                                            })}
                                        </Typography>
                                    }
                                />

                            </ListItem>
                        })
                        }
                    </List>

                </Box>
                <Box flex={"1 1 100%"} ml={"15px"}>
                    <FullCalendar
                        height={"75vh"}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{
                            left: "prev, next, today",
                            center: "title",
                            right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => {
                            setCurrentEvents(events)
                        }}
                        initialEvents={[{
                            id: "1234",
                            title: "All-day event", date: "2023-04-26"//Date()
                        }, {
                            id: "0901",
                            title: "Stand-up event", date: "2023-04-26"//Date()
                        }
                        ]}
                    />
                </Box>
            </Box>

        </Box>
    )

}

export default Calendar