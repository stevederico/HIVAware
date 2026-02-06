import { useNavigate } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { getState } from '@stevederico/skateboard-ui/Context';
import DynamicIcon from '@stevederico/skateboard-ui/DynamicIcon';
import { Sun, Moon, Check } from 'lucide-react';
import { Button } from '@stevederico/skateboard-ui/shadcn/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@stevederico/skateboard-ui/shadcn/ui/card';
import { Badge } from '@stevederico/skateboard-ui/shadcn/ui/badge';
import { Separator } from '@stevederico/skateboard-ui/shadcn/ui/separator';

/**
 * Custom landing page without pricing section.
 * @returns {JSX.Element}
 */
export default function LandingView() {
  const { state } = getState();
  const constants = state.constants;
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <DynamicIcon name={constants.appIcon} size={28} className="text-primary" strokeWidth={2} />
            <span className="text-2xl font-bold text-foreground">{constants.appName}</span>
          </div>

          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">Features</a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">Terms</a>
          </div>

          <div className="flex gap-3 items-center">
            <Button variant="outline" size="icon" onClick={() => setTheme(isDarkMode ? 'light' : 'dark')} aria-label="Toggle dark mode">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button variant="default" onClick={() => navigate('/app')}>
              {constants.cta}
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 md:py-40 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-tight">
              {constants.tagline}
            </h1>
            <Button variant="default" size="cta" onClick={() => navigate('/app')}>
              {constants.cta}
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">{constants.features?.title || 'Features'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {(constants.features?.items || []).map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="items-center">
                    <Badge variant="secondary" className="text-2xl mb-2 h-auto px-3 py-1">{feature.icon}</Badge>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="bg-primary text-primary-foreground py-16 text-center">
              <CardContent>
                <h2 className="text-4xl md:text-5xl font-bold mb-10">Ready to Learn?</h2>
                <Button variant="secondary" size="cta" onClick={() => navigate('/app')}>
                  {constants.cta}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Separator className="mb-8" />
          <div className="flex justify-center gap-8 mb-6">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">Privacy</a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">Terms</a>
            <a href="/eula" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">EULA</a>
          </div>
          <p className="text-center text-muted-foreground">&copy; {new Date().getFullYear()} {constants.companyName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
