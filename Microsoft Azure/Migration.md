# Azure Migrate

<p align="center">
 <img src="https://user-images.githubusercontent.com/33658792/232046478-79c9c521-ee93-4183-aa79-24c9634a3864.png">
<p>

Azure Migrate is a tool that helps you move your computer applications, data, and other important information to the cloud. Think of it as a big truck that transports all of your things from your old house to your new one, but in this case, your old house is your computer and the new one is the cloud.

The tool works by scanning your computer and analyzing what you have on it. It then recommends the best way to move everything to the cloud. This can include creating a plan for moving everything at once or moving things in smaller groups over time.

Once everything is moved to the cloud, you can access your applications and data from anywhere, as long as you have an internet connection. This makes it easier to work remotely or collaborate with others.

> Overall, Azure Migrate is a helpful tool for anyone who wants to move their computer applications and data to the cloud.

<br>
 
### Strategies / Approach
![Strategies](https://user-images.githubusercontent.com/33658792/232046025-7dd568fb-6461-442f-91c6-43131e860c51.png)

<br>

## ⭕ Steps to perform a migration

the step-by-step instructions to migrate a server to Azure using Azure Migrate:

* Create an Azure Migrate project in the Azure portal.
* Install the Azure Migrate appliance on a server that has access to the servers you want to migrate.
* Discover and assess the servers you want to migrate using the Azure Migrate appliance or by connecting to VMware vCenter or Microsoft System Center Virtual Machine Manager.
* Create a migration group in the Azure Migrate project and add the servers you want to migrate to it.
* Create a migration plan by selecting the migration type (such as lift-and-shift or re-platforming), choosing the target Azure region, and determining the best Azure VM size for your servers.
* Configure the necessary Azure networking and security settings.
* Prepare the servers you want to migrate by installing the necessary migration tools and agents.
* Test the migration plan by replicating the servers' data to Azure.
* Perform a cutover to complete the migration by stopping the source servers and starting the migrated Azure VMs.

<br>

## ⭕ Pre-Requisites 

* **A supported operating system:** The servers you want to migrate must be running a supported operating system that is compatible with Azure.

* **Sufficient disk space:** The servers you want to migrate must have enough disk space to accommodate the Azure Migrate appliance and any migration tools you need to install.

* **Firewall configuration:** The firewall on the servers you want to migrate must be configured to allow communication with the Azure Migrate appliance.

* **User rights:** You need to have the necessary user rights to perform the migration, such as the ability to install software and modify system settings.

* **Compatibility of applications:** You need to ensure that the applications running on the servers are compatible with Azure and that any necessary changes are made to ensure a successful migration.

* **Azure resource requirements:** You need to ensure that you have sufficient Azure resources available, such as storage accounts and virtual networks, to accommodate the migrated servers.

## ⭕ Automation 

* Create an Azure Migrate project: You can use the `New-AzMigrateProject` cmdlet to create an Azure Migrate project.

* Discover and assess servers: You can use the `Import-AzMigrateServer` cmdlet to import servers to be migrated and the `New-AzMigrateAssessment` cmdlet to create an assessment of the servers.

* Create a migration plan: You can use the `New-AzMigrateProject` cmdlet to create a migration plan based on the assessment.

* Prepare servers for migration: You can use the `Set-AzMigrateServerAssessmentProperties` cmdlet to set properties on the servers, such as installation of the Azure Migrate appliance.

* Perform a migration: You can use the `Start-AzMigrateServerMigration` cmdlet to start migrating the servers to Azure.

<br>

## ⭕ Script

```ps1
# Connect to Azure
Connect-AzAccount

# Prompt the user for the server details
$serverName = Read-Host "Enter the name of the server to migrate"
$resourceGroupName = Read-Host "Enter the name of the resource group to migrate the server to"
$location = Read-Host "Enter the Azure location to migrate the server to (e.g. eastus)"

# Create an Azure Migrate project
New-AzMigrateProject -ProjectName "MyMigrationProject" -Location $location

# Discover and assess the server
Import-AzMigrateServer -ServerName $serverName -ResourceGroup $resourceGroupName -IPAddress "10.0.0.1" -VMware -VMwareCredential $creds
New-AzMigrateAssessment -ResourceGroupName $resourceGroupName -ServerName $serverName

# Create a migration plan
New-AzMigrateServerMigration -ResourceGroupName $resourceGroupName -ServerName $serverName -TargetLocation $location -VMSize Standard_D2s_v3

# Prepare the server for migration
Set-AzMigrateServerAssessmentProperties -ResourceGroupName $resourceGroupName -ServerName $serverName -InstallAzureTools

# Start the migration
Start-AzMigrateServerMigration -ResourceGroupName $resourceGroupName -ServerName $serverName
```

<br>

## ⭕ Why is it important ?
 
<p align="center">
   <img src="https://user-images.githubusercontent.com/33658792/232046383-952aafdc-3aa4-4af7-85dd-49a981dd408f.png">
</p>

Imagine you have a toy in your room that you really like playing with. But one day, you have to move to a new house. You want to take your toy with you, but you can't just pick it up and carry it over. **You need a big truck to help you move all your toys and other things to the new house.**

Similarly, when companies have their computer programs and data on their own servers, they sometimes need to move them to a different place, like to the cloud. Azure is a cloud platform that can help them do that. **Azure Migration is like a big truck that helps companies move their computer programs and data from their old servers to the new place in the cloud.** It makes sure everything gets there safely, so they can keep using their programs and data in the new place without any problems.

<br>

## ⭕ Challenges

* Compatibility issues: Some servers may not be compatible with Azure, or some applications running on those servers may not be supported by Azure. In such cases, you may need to reconfigure or rewrite the application, or consider alternative migration options.

* Data transfer and security: Transferring large amounts of data from on-premises servers to the cloud can be time-consuming and may require careful planning. Additionally, you need to ensure that your data is secure during the migration process.

* Downtime and business disruption: Migrating servers to the cloud can cause some downtime, which can affect business operations. To minimize disruption, you may need to plan the migration carefully and perform it during off-peak hours.

* Complex environments: If your organization has complex IT environments with many servers and applications, it may be challenging to identify all the dependencies and ensure that everything is migrated properly.

* Cost considerations: Migrating to the cloud can involve additional costs, such as Azure subscription fees, data transfer costs, and potentially higher licensing costs. You need to carefully evaluate the costs involved and plan accordingly.
