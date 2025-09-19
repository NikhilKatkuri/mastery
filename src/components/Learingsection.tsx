import React from "react";

function LearningSection() {
  const topics = [
    "Logic Building",
    "Patterns",
    "Number Theory",
    "Recursion",
    "Backtracking",
    "Arrays",
    "Strings",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Hash Maps",
    "Heaps",
    "Trees",
    "Tries",
    "Graphs",
    "Disjoint Sets",
    "Searching",
    "Sorting",
    "Greedy Algorithms",
    "Divide and Conquer",
    "Dynamic Programming",
    "Sliding Window",
    "Two Pointers",
    "Bit Manipulation",
    "Graph Algorithms",
    "Complexity Analysis",
    "Memory Optimization",
    "Competitive Programming",
    "Debugging",
    "System Design Basics",
    "Project Challenges",
    "Coding Interviews",
  ];

  const row1 = topics.slice(0, 11);
  const row2 = topics.slice(11, 22);
  const row3 = topics.slice(22);

  const rows = [row1, row2, row3];

  return (
    <section className="bg-level-01/40 text-foreground min-h-96 w-full py-16">
      <h2 className="text-primary-foreground mb-12 text-center text-3xl font-bold">
        The Topics we included in Mastery
      </h2>
      <div className="mx-auto w-full max-w-none">
        <div className="flex flex-col space-y-6 overflow-hidden">
          {rows.map((row, index) => (
            <div
              key={index}
              className="scrolling-row relative flex overflow-hidden"
            >
              <div
                className={`flex space-x-6 ${
                  index % 2 === 0
                    ? "animate-scroll-right"
                    : "animate-scroll-left"
                }`}
              >
                {row.map((topic, topicIndex) => (
                  <span
                    key={`first-${topicIndex}`}
                    className="border-level-01 bg-level-02 flex-shrink-0 rounded-lg border px-4 py-2 text-sm whitespace-nowrap"
                  >
                    {topic}
                  </span>
                ))}
                {row.map((topic, topicIndex) => (
                  <span
                    key={`duplicate-${topicIndex}`}
                    className="border-level-01 bg-level-02 flex-shrink-0 rounded-lg border px-4 py-2 text-sm whitespace-nowrap"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningSection;
