#include "z3/include/z3++.h"
#include "json.hpp"

#include <iostream>
#include <vector>
#include <string>
#include <Windows.h>
#include <fstream>
#include <format>

using json = nlohmann::json;

std::vector <int> seq{};
std::fstream config("config.json");
std::fstream predFile("number.prediction");
std::string configContents;

json configJson = json::parse(configContents);

std::string channelID = configJson.value("channelID", "oops");
std::string botID = configJson.value("botID", "oops");
int maxValue = configJson.value("max", "oops");

void readConfig()
{
    // reads contents of config.json and stores it all in a variable
    std::cout << "Getting config.json contents...\n";

    if (config.is_open()) {
        while (config.good()) {
            config >> configContents;
        }
    }

    std::string question;
    std::cout << "Would you like to see the config.json contents? (y/n)\n";
    std::cin >> question;
    // because why not
    if (question == "y") {
        std::cout << configJson << "\n";
    } else {
        std::cout << "Skipping..\n";
    }
}

int predict()
{
    // Placeholder for now so code can compile
    int predicted;

    std::string notice = std::format("Channel: {}\nBot: {}\nMax: {}\n", channelID, botID, maxValue);
    std::cout << notice << "\n";

    z3::context context;
    z3::solver solver(context);

    return predicted;
}

int main()
{
    // void readConfig();
    readConfig();
    // int predict();
    predict();

    return 0;
}