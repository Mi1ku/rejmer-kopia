using Syncfusion.Maui.Toolkit.Charts;

namespace szyfr_cezara_dekstop.Pages.Controls
{
    public class LegendExt : ChartLegend
    {
        protected override double GetMaximumSizeCoefficient()
        {
            return 0.5;
        }
    }
}
