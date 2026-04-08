using CommunityToolkit.Mvvm.Input;
using szyfr_cezara_dekstop.Models;

namespace szyfr_cezara_dekstop.PageModels
{
    public interface IProjectTaskPageModel
    {
        IAsyncRelayCommand<ProjectTask> NavigateToTaskCommand { get; }
        bool IsBusy { get; }
    }
}