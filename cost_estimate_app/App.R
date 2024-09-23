library(shiny)
library(shinydashboard)
library(DT)
library(dplyr)
library(shinyjs)
library(plotly)

# Initial cost data
initial_cost_data <- list(
    "Software Development" = data.frame(
        Item = c("Senior Data Scientists", "Machine Learning Engineers", "Full-stack Developers", 
                 "UI/UX Designer", "Project Manager", "DevOps Engineers", 
                 "Development tools and licenses", "Third-party APIs and services",
                 "Training", "Yearly Maintenance (starting year 3)"),
        Quantity = c(3, 2, 4, 2, 2, 4, 1, 1, 1, 1),
        Cost = c(600000, 600000, 500000, 360000, 360000, 480000, 500000, 350000, 500000, 500000),
        Suffix = c(rep("/ 2 years", 6), "", "", "", "/ year")
    ),
    "Hardware" = data.frame(
        Item = c("AI-enabled cameras", "Edge computing devices", "Environmental sensors", 
                 "Installation and networking", "High-performance servers", "Networking equipment", 
                 "Workstations for operators", "Large display screens", "Drones", "Solar panels",
                 "Starlink devices"),  # Added Starlink devices installation
        Quantity = c(35, 35, 105, 1, 5, 1, 10, 10, 35, 35, 35),  # Updated quantity
        Cost = c(10000, 2000, 1000, 1500000, 100000, 1000000, 30000, 10000, 20000, 15000, 500),  # Added cost
        Suffix = rep("", 11)  # Updated suffix
    ),
    "Cloud Infrastructure" = data.frame(
        Item = c("Compute resources (Dev)", "Storage (Dev)", "AI and ML services (Dev)", 
                 "Compute resources (Prod)", "Storage (Prod)", "AI and ML services (Prod)", 
                 "Networking and data transfer", "Starlink connectivity"),  # Added Starlink connectivity
        Quantity = c(rep(1, 7), 35),  # Updated quantity
        Cost = c(350000, 150000, 120000, 500000, 180000, 96000, 50000, 3000),  # Updated cost
        Suffix = c(rep("/ year", 8))  # Updated suffix
    )
)

ui <- dashboardPage(
    skin = "green",
    dashboardHeader(title = "AIMS Cost Analysis"),
    dashboardSidebar(
        sidebarMenu(
            menuItem("Dashboard", tabName = "dashboard", icon = icon("dashboard")),
            menuItem("Detailed View", tabName = "detailed", icon = icon("table")),
            menuItem("Running Costs", tabName = "running_costs", icon = icon("dollar-sign")),
            actionButton("reset", "Reset to Default", icon = icon("undo"))
        )
    ),
    dashboardBody(
        useShinyjs(),
        tags$head(
            tags$style(HTML("
        .content-wrapper, .right-side { background-color: #f4f6f9; }
        .box { box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .total-box { font-size: 38px; font-weight: bold; text-align: center; padding: 20px; color: white; border-radius: 5px; }
        .small-box { overflow: hidden; }
      "))
        ),
        tabItems(
            tabItem(tabName = "dashboard",
                    fluidRow(
                        column(width = 4, 
                               box(title = "Software Development Costs", width = NULL, solidHeader = TRUE, status = "primary", height = "800px",
                                   DTOutput("software_table"),
                                   br(),
                                   
                                   plotlyOutput("software_plot", height = "300px")
                               )
                        ),
                        column(width = 4,
                               box(title = "Hardware Costs", width = NULL, solidHeader = TRUE, status = "info", height = "800px",
                                   DTOutput("hardware_table"),
                                   plotlyOutput("hardware_plot", height = "300px")
                               )
                        ),
                        column(width = 4,
                               box(title = "Cloud Infrastructure Costs", width = NULL, solidHeader = TRUE, status = "warning", height = "800px",
                                   DTOutput("cloud_table"),
                                   br(),
                                   br(),
                                   br(),
                                   br(),
                                   br(),
                                   plotlyOutput("cloud_plot", height = "300px")
                               )
                        )
                    ),
                    fluidRow(
                        valueBoxOutput("software_total", width = 4),
                        valueBoxOutput("hardware_total", width = 4),
                        valueBoxOutput("cloud_total", width = 4)
                    ),
                    fluidRow(
                        box(
                            title = "Total Project Cost", width = 12, solidHeader = TRUE, status = "success",
                            div(class = "total-box", style = "background-color: #28a745;", textOutput("grand_total"))
                        )
                    )
            ),
            tabItem(tabName = "detailed",
                    fluidRow(
                        box(
                            title = "Detailed Cost Breakdown", width = 12, solidHeader = TRUE, status = "primary",
                            DTOutput("detailed_table")
                        )
                    )
            ),
            tabItem(tabName = "running_costs",
                    fluidRow(
                        box(
                            title = "Yearly Running Costs", width = 12, solidHeader = TRUE, status = "success",
                            DTOutput("running_costs_table"),
                            br(),
                            valueBoxOutput("running_costs_total", width = 12)
                        )
                    )
            )
        ),
        fluidRow(
            box(
                title = "Cost Notes", width = 12, status = "info",
                "Software development costs cover a 2-year period. Yearly maintenance starts from year 3."
            )
        )
    )
)
server <- function(input, output, session) {
    
    cost_data <- reactiveVal(initial_cost_data)
    
    # Function to create editable DataTable
    createDT <- function(data, editable = c("Quantity", "Cost")) {
        DT::datatable(data, editable = list(target = "cell", disable = list(columns = c(1, 4))), 
                      options = list(dom = 't', ordering = FALSE, pageLength = -1),
                      rownames = FALSE) %>%
            formatCurrency(columns = "Cost", currency = "$", interval = 3, mark = ",", digits = 0) %>%
            formatStyle(columns = c("Quantity", "Cost"), backgroundColor = "#f8f9fa")
    }
    
    # Render tables
    output$software_table <- renderDT({ createDT(cost_data()$`Software Development`) })
    output$hardware_table <- renderDT({ createDT(cost_data()$Hardware) })
    output$cloud_table <- renderDT({ createDT(cost_data()$`Cloud Infrastructure`) })
    
    # Update costs when edited
    observeEvent(input$software_table_cell_edit, {
        info <- input$software_table_cell_edit
        cost_data()$`Software Development`[info$row, info$col] <- info$value
        cost_data(cost_data())
    })
    
    observeEvent(input$hardware_table_cell_edit, {
        info <- input$hardware_table_cell_edit
        cost_data()$Hardware[info$row, info$col] <- info$value
        cost_data(cost_data())
    })
    
    observeEvent(input$cloud_table_cell_edit, {
        info <- input$cloud_table_cell_edit
        cost_data()$`Cloud Infrastructure`[info$row, info$col] <- info$value
        cost_data(cost_data())
    })
    
    # Calculate totals
    calculate_total <- function(data) {
        sum(data$Quantity * data$Cost)
    }
    
    software_total <- reactive({ calculate_total(cost_data()$`Software Development`) })
    hardware_total <- reactive({ calculate_total(cost_data()$Hardware) })
    cloud_total <- reactive({ calculate_total(cost_data()$`Cloud Infrastructure`) })
    
    # Render value boxes
    output$software_total <- renderValueBox({
        valueBox(
            paste0("$", format(software_total(), big.mark = ",", scientific = FALSE)), 
            "Software Development Total",
            icon = icon("code"),
            color = "purple"
        )
    })
    
    output$hardware_total <- renderValueBox({
        valueBox(
            paste0("$", format(hardware_total(), big.mark = ",", scientific = FALSE)), 
            "Hardware Total",
            icon = icon("server"),
            color = "blue"
        )
    })
    
    output$cloud_total <- renderValueBox({
        valueBox(
            paste0("$", format(cloud_total(), big.mark = ",", scientific = FALSE)), 
            "Cloud Infrastructure Total",
            icon = icon("cloud"),
            color = "orange"
        )
    })
    
    # Calculate and render grand total
    output$grand_total <- renderText({
        total <- software_total() + hardware_total() + cloud_total()
        contingency <- total * 0.2
        grand_total <- total + contingency
        paste0("$", format(grand_total, big.mark = ",", scientific = FALSE))
    })
    
    # Render detailed table
    output$detailed_table <- renderDT({
        all_costs <- bind_rows(
            mutate(cost_data()$`Software Development`, Category = "Software Development"),
            mutate(cost_data()$Hardware, Category = "Hardware"),
            mutate(cost_data()$`Cloud Infrastructure`, Category = "Cloud Infrastructure")
        ) %>%
            select(Category, everything()) %>%
            mutate(Total = Quantity * Cost)
        
        createDT(all_costs, editable = "none") %>%
            formatCurrency(columns = c("Cost", "Total"), currency = "$", interval = 3, mark = ",", digits = 0)
    })
    
    # Reset button
    observeEvent(input$reset, {
        cost_data(initial_cost_data)
    })
    
    # Donut charts
    create_donut_chart <- function(data, colors) {
        plot_ly(data, labels = ~Item, values = ~(Quantity * Cost), type = 'pie',
                textposition = 'inside', textinfo = 'percent', hoverinfo = 'text',
                text = ~paste(Item, "<br>", "$", format(Quantity * Cost, big.mark = ",")),
                marker = list(colors = colors, line = list(color = '#FFFFFF', width = 1)),
                hole = 0.6) %>%
            layout(showlegend = FALSE, 
                   margin = list(l=20, r=20, t=20, b=20),
                   annotations = list(
                       list(
                           text = paste0("$", format(sum(data$Quantity * data$Cost), big.mark = ",")),
                           showarrow = FALSE,
                           font = list(size = 20)
                       )
                   ))
    }
    
    output$software_plot <- renderPlotly({
        data <- cost_data()$`Software Development`
        create_donut_chart(data, colorRampPalette(c("#8E44AD", "#9B59B6", "#AF7AC5"))(nrow(data)))
    })
    
    output$hardware_plot <- renderPlotly({
        data <- cost_data()$Hardware
        create_donut_chart(data, colorRampPalette(c("#2980B9", "#3498DB", "#5DADE2"))(nrow(data)))
    })
    
    output$cloud_plot <- renderPlotly({
        data <- cost_data()$`Cloud Infrastructure`
        create_donut_chart(data, colorRampPalette(c("#D35400", "#E67E22", "#F39C12"))(nrow(data)))
    })
    
    # Calculate yearly running costs
    running_costs <- reactive({
        software_maintenance <- cost_data()$`Software Development` %>%
            filter(Item == "Yearly Maintenance (starting year 3)") %>%
            mutate(Total = Quantity * Cost)
        
        cloud_infrastructure <- cost_data()$`Cloud Infrastructure` %>%
            mutate(Total = Quantity * Cost)
        
        bind_rows(software_maintenance, cloud_infrastructure)
    })
    
    # Render running costs table
    output$running_costs_table <- renderDT({
        createDT(running_costs(), editable = "none") %>%
            formatCurrency(columns = c("Cost", "Total"), currency = "$", interval = 3, mark = ",", digits = 0)
    })
    
    # Calculate and render total yearly running costs
    output$running_costs_total <- renderValueBox({
        total_running_costs <- sum(running_costs()$Total)
        valueBox(
            paste0("$", format(total_running_costs, big.mark = ",", scientific = FALSE)), 
            "Total Yearly Running Costs",
            icon = icon("dollar-sign"),
            color = "green"
        )
    })
}

shinyApp(ui, server)
