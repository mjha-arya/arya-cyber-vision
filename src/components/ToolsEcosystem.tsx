import { Shield, Database, Users, Smartphone, Cloud, Building } from 'lucide-react';

const ToolsEcosystem = () => {
  const tools = [
    { name: "Microsoft Defender", icon: Shield },
    { name: "Sentinel", icon: Database },
    { name: "Entra ID", icon: Users },
    { name: "Intune", icon: Smartphone },
    { name: "Azure", icon: Cloud },
    { name: "M365 E5", icon: Building },
  ];

  return (
    <section className="py-16 bg-soft/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">
            Microsoft Security Ecosystem
          </h2>
          <p className="text-muted-foreground">
            Leveraging the full power of Microsoft's security suite for comprehensive protection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-background border border-border rounded-xl flex items-center justify-center mb-3 group-hover:border-primary transition-colors">
                <tool.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsEcosystem;