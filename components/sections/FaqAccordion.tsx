import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Sit quisque arcu hendrerit et nam. Vitae enim viverra quis aliqua",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title:
      "Egestas sollicitudin amet vivamus duis ornare. Magnis feugiat diam.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ac.",
  },
  {
    title:
      "In mauris nibh pellentesque tincidunt. Leo sed amet vel eu porttitor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet elit.",
  },
  {
    title: "Justo ac nibh etiam tincidunt massa tempus. Turpis purus nullam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis morbi.",
  },
  {
    title: "Et volutpat in at magna in gravida ultricies proin suspendiss",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function FaqAccordion() {
  return (
    <div className="w-full max-w-xl sm:max-w-2xl space-y-4 sm:px-0">
      <Accordion type="single" collapsible className="space-y-4">
        {items.map(({ title, content }, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="
              group 
              border-none 
              rounded-xl 
              px-4 sm:px-6 py-4 
              backdrop-blur-[20px] 
              shadow-[0_10px_10px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.05)] 
              bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.5))]
            "
          >
            <AccordionTrigger
              className="
                text-left 
                text-sm sm:text-base 
                font-medium 
                pr-2 
                flex items-center justify-between 
                hover:no-underline 
                [&>svg]:hidden
              "
            >
              {title}

              {/* Custom + / – icon */}
              <div>
                <span
                  className="
                  ml-4 flex h-7 w-7 items-center justify-center 
                  rounded-full border border-white/40 
                   backdrop-blur-sm 
                  transition-all bg-white/30
                "
                >
                  <span className="block group-data-[state=open]:hidden text-xl leading-none">
                    +
                  </span>
                  <span className="hidden group-data-[state=open]:block text-xl leading-none">
                    –
                  </span>
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent
              className="
                text-sm sm:text-base 
                text-[rgba(0,0,0,0.7)] 
                leading-[150%] 
                pt-2 pb-4 text-left
              "
            >
              {content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
