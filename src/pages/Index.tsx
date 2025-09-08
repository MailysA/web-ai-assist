import { AIAssistantWidget } from '@/components/ai-assistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Demo Content */}
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="mb-6 text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AI Assistant Widget
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A clean, modern AI chat widget that can be easily integrated into any website.
            Click the chat button in the bottom right to start a conversation!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-widget-bg rounded-xl p-6 border border-widget-border shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">🚀 Easy Integration</h3>
              <p className="text-sm text-muted-foreground">
                Simply add the widget component to any React app
              </p>
            </div>
            
            <div className="bg-widget-bg rounded-xl p-6 border border-widget-border shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">⚡ High Performance</h3>
              <p className="text-sm text-muted-foreground">
                Lightweight and optimized for fast loading
              </p>
            </div>
            
            <div className="bg-widget-bg rounded-xl p-6 border border-widget-border shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">🎨 Beautiful Design</h3>
              <p className="text-sm text-muted-foreground">
                Modern, clean interface with smooth animations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Widget */}
      <AIAssistantWidget />
    </div>
  );
};

export default Index;
